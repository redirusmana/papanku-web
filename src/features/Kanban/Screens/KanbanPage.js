import React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import TaskList from "../Components/TaskList";
import FormAddCard from "../Assists/FormAddCard";
import FormAddListTask from "../Assists/FormAddListTask";
import FormEditTitleCard from "../Assists/FormEditTitleCard";
import api from "../../../provider/Tools/api";
import Modal from "../../../provider/Display/Modal";
import CardPage from "../Components/CardPage";
import LoadingCard from "../../../provider/Display/LoadingCard";

class KanbanPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      dataSources: {},
      loading: false
    };
  }

  componentDidMount() {
    this.getBoardInfo();
  }

  getBoardInfo = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        const { match } = this.props;
        const ROUTE_API = `api/board/${match.params.id}`;
        this._requestSource = api.generateCancelToken();
        api
          .get(ROUTE_API, this._requestSource.token)
          .then(response => {
            const { data } = response;
            this.setState({
              dataSources: data,
              loading: false
            });
          })
          .catch(error => console.log(error));
      }
    );
  };

  handleModal = () => {
    this.setState({
      isVisible: true
    });
  };

  handleClose = () => {
    this.setState({
      isVisible: false
    });
  };

  addTask = ({ newTask, columnIndex }) => {
    this.setState(prevState => {
      const newList = prevState.dataSources.lists.map((list, li) => {
        if (columnIndex !== li) return list;

        return {
          ...list,
          cards: [...list.cards, newTask]
        };
      });

      return {
        dataSources: {
          ...prevState.dataSources,
          lists: newList
        }
      };
    });
  };

  // handleReplace = (newDataSources) =>{
  //   this.setState({
  //     dataSources:newDataSources
  //   })
  // }

  render() {
    const { dataSources, loading } = this.state;

    if (loading) {
      return <LoadingCard />;
    }

    return (
      <React.Fragment>
        <div className="kanban-board">
          <Container
            orientation="horizontal"
            dragHandleSelector=".kanban-draggable-header"
          >
            {Array.isArray(dataSources.lists) && dataSources.lists.length > 0
              ? dataSources.lists.map((column, columnIndex) => (
                  <Draggable key={`column-id-${column.id}`}>
                    <div className="kanban-column">
                      <div className="kanban-column-header">
                        <FormEditTitleCard columnSource={column} />
                      </div>
                      <div className="kanban-column-body">
                        <Container
                          groupName="col"
                          onDragStart={this.onDragStart}
                          onDragEnd={this.onDragEnd}
                          dropClass="kanban-card-ghost-drop"
                          dragClass="kanban-card-ghost"
                        >
                          {column.cards.map(cell => {
                            return (
                              <Draggable key={`cards-id-${cell.id}`}>
                                <div
                                  role="presentation"
                                  className={"kanban-cell"} //  disable-pointer
                                  // onClick={e => this.onCellClick(e, cell)}
                                  onClick={() => this.handleModal()}
                                >
                                  <div className="kanban-cell-body">
                                    <TaskList task={cell} />
                                  </div>
                                </div>
                              </Draggable>
                            );
                          })}
                        </Container>
                      </div>
                      <div className="kanban-column-footer">
                        <FormAddListTask
                          listSource={column}
                          addTask={this.addTask}
                          columnIndex={columnIndex}
                        />
                      </div>
                    </div>
                  </Draggable>
                ))
              : []}

            <div className="kanban-column-creator">
              <div className="kanban-column">
                <FormAddCard idBoard={dataSources.id} />
              </div>
            </div>
          </Container>
        </div>
        <Modal
          showTitle={false}
          visible={this.state.isVisible}
          size="large"
          handleBack={this.handleClose}
          // afterClose={this.afterTaskClosed}
          wrapClassName="task-modal-wrapper"
        >
          <CardPage />
        </Modal>
      </React.Fragment>
    );
  }
}

export default KanbanPage;

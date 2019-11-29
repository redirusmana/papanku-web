import React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import TaskList from "../Components/TaskList";
import FormAddCard from "../Assists/FormAddCard";
import FormAddListTask from "../Assists/FormAddListTask";
import FormEditTitleCard from "../Assists/FormEditTitleCard";
import Modal from "../../../provider/Display/Modal";
import CardPage from "../Components/CardPage";

class KanbanPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
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

  render() {
    return (
      <React.Fragment>
        <div className="kanban-board">
          <Container
            orientation="horizontal"
            dragHandleSelector=".kanban-draggable-header"
          >
            <Draggable>
              <div className="kanban-column">
                <div className="kanban-column-header">
                  <FormEditTitleCard />
                </div>
                <div className="kanban-column-body">
                  <Container
                    groupName="col"
                    onDragStart={this.onDragStart}
                    onDragEnd={this.onDragEnd}
                    dropClass="kanban-card-ghost-drop"
                    dragClass="kanban-card-ghost"
                  >
                    <Draggable>
                      <div
                        role="presentation"
                        className="kanban-cell"
                        onClick={() => this.handleModal()}
                      >
                        <div className="kanban-cell-body">
                          <TaskList />
                        </div>
                      </div>
                    </Draggable>
                  </Container>
                </div>
                <div className="kanban-column-footer">
                  <FormAddListTask />
                </div>
              </div>
            </Draggable>

            <div className="kanban-column-creator">
              <div className="kanban-column">
                <FormAddCard />
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

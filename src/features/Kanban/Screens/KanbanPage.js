import React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import TaskList from "../Components/TaskList";
import FormAddCard from "../Assists/FormAddCard";
import FormAddListTask from "../Assists/FormAddListTask";
import FormEditTitleCard from "../Assists/FormEditTitleCard";

class KanbanPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <div className="projectable">
      // <div className="projectable-body">
      <div className="kanban-board">
        <Container
          orientation="horizontal"
          // getChildPayload={}
          // onDrop={}
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
                    <div role="presentation" className="kanban-cell">
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
      // </div>
      // </div>
    );
  }
}

export default KanbanPage;

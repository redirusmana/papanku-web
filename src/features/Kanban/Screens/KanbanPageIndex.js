import React from "react";
// import TaskList from "../Components/TaskList";
import KanbanPage from "./KanbanPage";
import NavbarKanbanPage from "./NavbarKanbanPage";
import "../Style/style.css";
import "../../style/style.css";

class KanbanPageIndex extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="projectable">
          <div className="projectable-header">
            <NavbarKanbanPage />
          </div>
          <div className="projectable-body">
            <KanbanPage />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default KanbanPageIndex;

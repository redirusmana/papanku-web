import React from "react";
import Avatar from "../../../provider/Display/Avatar";

class TaskList extends React.PureComponent {
  renderMembers() {
    return (
      <div className="avatar-list avatar-list-stacked">
        <Avatar name="Redi Rusmana" size="sm" />
        <Avatar name="Redi Rusmana" size="sm" />
      </div>
    );
  }

  renderChecklist() {
    const checklist = (
      <div className="mx-1">
        <i className="icofont-checked " />
        <small>6/10</small>
      </div>
    );

    return checklist;
  }

  renderDeadline() {
    return (
      <div className={"ml-auto task-badge badge badge-danger"}>
        <i className="icofont-clock-time" />
        <span>12 January 2020</span>
      </div>
    );
  }

  renderAttachment() {
    return (
      <div title="This task has attachment" className="mx-1">
        <i className="icofont-clip " />
        {/* papers */}
        <small>{2}</small>
      </div>
    );
  }

  renderStatus() {
    return (
      <div className="task-status ">
        <span className="task-badge badge badge-primary hide-badge mr-1">
          nbsp;
        </span>
      </div>
    );
  }
  renderPriority() {
    return (
      <div className="task-status">
        <span className="task-badge badge badge-warning hide-badge ">
          nbsp;
        </span>
      </div>
    );
  }

  renderDescription() {
    return (
      <div title="This task has description inside it" className="mx-1">
        <i className="icofont-info-circle icon-only" />
      </div>
    );
  }

  render() {
    return (
      <div className="text-casual">
        <div className="d-flex flow-row">
          {this.renderStatus()}
          {this.renderPriority()}
          {this.renderDeadline()}
        </div>

        <div className="my-1">Nama Task</div>
        <div className="d-flex flex-row flex-nowrap justify-content-between align-items-center">
          <div>{this.renderMembers()}</div>
          <div className="form-inline mb-0">
            {this.renderDescription()}
            {this.renderAttachment()}
            {this.renderChecklist()}
            {/* {this.renderDeadline()} */}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;

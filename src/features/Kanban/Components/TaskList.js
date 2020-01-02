import React from "react";
import { Popover } from "antd";
import get from "lodash/get";
import Avatar from "../../../provider/Display/Avatar";
import {
  OptStatusClass,
  OptPriorityClass,
  OptDeadlineClass
} from "../../../provider/Tools/config";
import { assetsApiUrl } from "../../../provider/Tools/general";

class TaskList extends React.PureComponent {
  renderMembers() {
    const { task } = this.props;
    const mappedListMember =
      Array.isArray(get(task, "members")) && get(task, "members").length > 0
        ? get(task, "members").map(member => {
            return (
              <Avatar
                name={member.name}
                title={member.title}
                size="sm"
                image={
                  member.avatar_path
                    ? assetsApiUrl(member.avatar_path)
                    : undefined
                }
              />
            );
          })
        : [];

    if (get(task, "members")) {
      return (
        <div className="avatar-list avatar-list-stacked">
          {mappedListMember}
        </div>
      );
    }
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
    const { task } = this.props;
    if (get(task, "due_date")) {
      return (
        <div className={`ml-auto task-badge ${OptDeadlineClass["unSoon"]}`}>
          <i className="icofont-clock-time" />
          <span>{task.due_date}</span>
        </div>
      );
    }
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
    const { task } = this.props;
    if (get(task, "status")) {
      return (
        <div className="task-status ">
          <span
            className={`task-badge ${OptStatusClass["In Progress"]} hide-badge mr-1`}
          >
            &nbsp;
          </span>
        </div>
      );
    }
  }
  renderPriority() {
    const { task } = this.props;
    if (get(task, "priority")) {
      return (
        <div className="task-status">
          <span
            className={`task-badge ${OptPriorityClass["Medium Priority"]} hide-badge `}
          >
            &nbsp;
          </span>
        </div>
      );
    }
  }

  renderDescription() {
    const { task } = this.props;
    const description = get(task, "description");
    if (description) {
      return (
        <div className="mx-1">
          <Popover
            content={description}
            trigger="hover"
            placement="bottom"
            overlayClassName="xl"
            // title="Description"
          >
            <i className="icofont-info-circle icon-only" />
          </Popover>
        </div>
      );
    }
  }

  render() {
    const { task } = this.props;
    return (
      <div className="text-casual">
        <div className="d-flex flow-row">
          {this.renderStatus()}
          {this.renderPriority()}
          {this.renderDeadline()}
        </div>

        <div className="my-1">{task.title}</div>
        <div className="d-flex flex-row flex-nowrap justify-content-between align-items-center">
          <div>{this.renderMembers()}</div>
          <div className="form-inline mb-0">
            {this.renderDescription()}
            {this.renderAttachment()}
            {this.renderChecklist()}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;

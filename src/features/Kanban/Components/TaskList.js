import React from "react";
import { Popover } from "antd";
import moment from "moment";
import "moment/locale/id";
import get from "lodash/get";
import uniqBy from "lodash/uniqBy";
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
    const mappedMembers = Array.isArray(get(task, "members")) ? (
      <div className="avatar-list avatar-list-stacked">
        {uniqBy(get(task, "members"))
            .slice(0, 3)
            .map(member => {
              return (
                <Avatar
                  key={`list-member-onTaskList-${member.id}`}
                  name={get(member, "user.name")}
                  title={get(member, "user.name")}
                  size="sm"
                  image={
                    get(member, "user.avatar_path")
                      ? assetsApiUrl(get(member, "user.avatar_path"))
                      : undefined
                  }
                  avatarClass="avatar-link my-1"
                />
              );
            })}
        {get(task, "members").length > 3 && <Avatar size="sm" name={get(task, "members").length - 3} />}
      </div>
    ) : null;
    return mappedMembers;
  }

  renderChecklist() {
    const { task } = this.props;
    // console.log(task)
    // const taskCheckLists = get(task, 'checklists');
    // const newFinds = taskCheckLists.map(taskCheckList => {
    //   return taskCheckList.childs.filter(child => child.is_checked === null).length
    // })

    // // console.log(newFinds)

    // const checklist =
    //   Array.isArray(taskCheckLists) && taskCheckLists.length > 0 ? (
    //     <div
    //       className="mx-1"
    //       title={`Remaining Task: ${taskCheckLists.length -
    //         taskCheckLists.filter(check => get(check, checkListCompleteAttr)).length}`}
    //     >
    //       <i className="la la-check-square icon-left" />
    //       <small>
    //         {taskCheckLists.filter(check => get(check, checkListCompleteAttr)).length}/{taskCheckLists.length}
    //       </small>
    //     </div>
    //   ) : null;

    // return checklist;
  }

  renderDeadline() {
    const { task } = this.props;
    const date = moment(get(task, "due_date"));
    const now = moment();
    let DueDateClass = null;
    if (now > date) {
      DueDateClass = "onTime";
    } else {
      DueDateClass = "late";
    }

    if (get(task, "due_date")) {
      return (
        <div className={`ml-auto task-badge ${OptDeadlineClass[DueDateClass]}`}>
          <i className="icofont-clock-time" />{" "}
          <span>{moment(task.due_date).format("YYYY-MM-DD")}</span>
        </div>
      );
    }
  }

  renderAttachment() {
    const { task } = this.props;
    const attachments = get(task, "attachments");
    // console.log(attachments);
    if (Array.isArray(attachments) && attachments.length > 0) {
      return (
        <div title="This task has attachment" className="mx-1">
          <Popover
            content={
              <div className="text-center font-weight-bold">
                {`
                  There are ${attachments.length} attachments on this card`}
              </div>
            }
            trigger="hover"
            placement="bottom"
            overlayClassName="xl"
            title="Attachments"
          >
            <i className="icofont-clip " />
            <small>{attachments.length}</small>
          </Popover>
        </div>
      );
    }
  }

  renderStatus() {
    const { task } = this.props;
    if (get(task, "status")) {
      return (
        <div className="task-status ">
          <span
            className={`task-badge ${
              OptStatusClass[get(task, "status")]
            } hide-badge mr-1`}
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
            className={`task-badge ${
              OptPriorityClass[get(task, "priority")]
            } hide-badge `}
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
            content={
              <div className="text-center font-weight-bold">{description}</div>
            }
            trigger="hover"
            placement="bottom"
            overlayClassName="xl"
            title="Description"
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

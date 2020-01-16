import React from "react";
// import PropTypes from 'prop-types';
// import uuid from 'uuid/v4';
import get from "lodash/get";
import { numberToPercentage } from "../../../provider/Tools/converter";
import popConfirm from "../../../provider/Display/popConfirm";
import EditingChecklist from "../Assists/EditingChecklist";
import EditingTask from "../Assists/EditingTask";
import ChecklistGroupCard from "./ChecklistGroupCard";
import ChecklistItemCard from "./ChecklistItemCard";
import api from "../../../provider/Tools/api";
import {
  axiosError,
  AXIOS_CANCEL_MESSAGE
} from "../../../provider/Tools/converter";
import "../Style/style.css";

class ChecklistCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async removeChecklistItem(item) {
    try {
      this._requestSource = api.generateCancelToken();
      const url = `/api/card/${item.card_id}/checklist/${item.id}`;
      const { data } = await api.delete(url);
      this.props.deleteChildChecklists(data.data);
    } catch (e) {
      const error = axiosError(e);
      if (error === AXIOS_CANCEL_MESSAGE) {
        return;
      }
    }
  }

  removeChecklistGroup(group) {
    popConfirm({
      title: `Are you sure to remove checklist ${group.title}?`,
      message: "The action is permanent, there is no way to get it back",
      okText: "Yes",
      cancelText: " No",
      onOkay: async () => {
        try {
          this._requestSource = api.generateCancelToken();
          const url = `/api/card/${group.card_id}/checklist/${group.id}`;
          const { data } = await api.delete(url);
          this.props.deleteChecklists(data.data);
        } catch (e) {
          const error = axiosError(e);
          if (error === AXIOS_CANCEL_MESSAGE) {
            return;
          }
        }
      },
      onCancel: () => {},
      okType: "danger"
    });
  }

  renderCheckListGroup({ title, percentage, group }) {
    return (
      <React.Fragment>
        <div className="subtask-header">
          <EditingChecklist
            initialValue={title}
            className="subtask-name"
            // submitChanges={value => this.changeCheckListGroup(group, value)}
          />
          <div className="d-inline-block">
            <button
              type="button"
              className="btn btn-sm btn-danger ml-2"
              onClick={() => this.removeChecklistGroup(group)}
            >
              <i className="icofont-trash" />
            </button>
          </div>
        </div>
        <div className="d-flex flex-row flex-nowrap align-items-center mb-2">
          <span className="badge badge-success mr-1">{percentage}%</span>
          <div className="progress flex-grow-1 flex-shrink-1">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${percentage}%` }}
              aria-valuenow={percentage}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  renderCheckListItem(item) {
    return (
      <div
        className="subtask-item task-hoverable pl-1"
        key={`${item.id}-${item.parent_id}-${item.card_id}`}
      >
        <label className="custom-control custom-checkbox mb-0 cursor-pointer">
          <input
            type="checkbox"
            className="custom-control-input"
            defaultChecked={item.is_checked}
            // onChange={e => this.changeCheckListItem(item, 'isComplete', e.currentTarget.checked)}
          />
          <span className="custom-control-label">&nbsp;</span>
        </label>
        <EditingTask
          initialValue={item.title}
          className="w-100"
          // submitChanges={value => this.changeCheckListItem(item, 'name', value)}
        />
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => this.removeChecklistItem(item)}
        >
          <i className="icofont-trash" />
        </button>
      </div>
    );
  }

  renderChecklist() {
    const { dataSource, handleAddChildChecklist } = this.props;

    const renderChecklist =
      Array.isArray(dataSource.checklists) &&
      dataSource.checklists.length > 0 ? (
        dataSource.checklists.map(checklistGroup => {
          const parent_id = checklistGroup.id;
          const completedCheckLists = checklistGroup.childs.filter(item =>
            get(item, "is_checked")
          );
          const percentage = numberToPercentage(
            (completedCheckLists.length / checklistGroup.childs.length) * 100,
            false
          );
          return (
            <div className="subtask" key={`check-group${checklistGroup.id}`}>
              {this.renderCheckListGroup({
                title: checklistGroup.title,
                percentage,
                group: checklistGroup
              })}
              {checklistGroup.childs.map(item =>
                this.renderCheckListItem(item)
              )}
              {
                <ChecklistItemCard
                  parentId={parent_id}
                  listId={dataSource.id}
                  handleAddChildChecklist={handleAddChildChecklist}
                />
              }
            </div>
          );
        })
      ) : (
        <div className="subtask">Checklist is empty</div>
      );

    return (
      <div className="task-detail-subtask">
        <div className="subtask-group">{renderChecklist}</div>
      </div>
    );
  }

  render() {
    const { dataSource, handleAddChecklist } = this.props;
    return (
      <React.Fragment>
        <section className="task-detail-group">
          <i className="icofont-checked" />
          <div>
            <div className="task-detail-subtitle">
              <span>Checklist</span>
              <div className="task-detail-options">
                <ChecklistGroupCard
                  listId={dataSource.id}
                  handleAddChecklist={handleAddChecklist}
                />
              </div>
            </div>

            {this.renderChecklist()}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ChecklistCard;

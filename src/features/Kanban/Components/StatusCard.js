import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { OptStatus } from "../../../provider/Tools/config";
import { OptStatusClass } from "../../../provider/Tools/config";

const TaskStatusChanger = ({
  currentStatus,
  onStatusClicked,
  children,
  options
}) => (
  <UncontrolledDropdown tag="span">
    <DropdownToggle
      tag="div"
      className="d-inline-flex flex-row cursor-pointer align-items-center"
    >
      {children}
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header className="px-3 py-1">
        Available Status
      </DropdownItem>
      <DropdownItem divider />
      {options.map((option, index) => (
        <DropdownItem
          tag="span"
          key={index}
          data-status={option.value}
          className="px-3"
          onClick={onStatusClicked}
        >
          <span
            className={`${
              OptStatusClass[option.value]
            } w-100 d-inline-flex align-items-center justify-content-between`}
          >
            <span>{option.value}</span>
            <span className="d-block w-5 text-right">
              {currentStatus === option.value && (
                <i className="icofont-check font-weight-bold" />
              )}
            </span>
          </span>
        </DropdownItem>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
);

class StatusCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeStatus = e => {
    const { dataset } = e.currentTarget;
    this.setState({
      status: dataset.status
    });
  };

  render() {
    const { status } = this.state;

    const mappedStatus = status ? (
      <React.Fragment>
        {/* <i className="la la-tag icon-left" /> */}
        <span className={`${OptStatusClass[status]}`}>{status}</span>
        <i className="icofont-rounded-down ml-2" />
      </React.Fragment>
    ) : (
      <React.Fragment>
        {/* dark */}
        <span className="badge badge-light">Available Status</span>
        <i className="icofont-rounded-down ml-2" />
      </React.Fragment>
    );

    return (
      <div className="task-detail-tag">
        <p className="mb-0">Status</p>
        <TaskStatusChanger
          currentStatus={status}
          onStatusClicked={this.changeStatus}
          options={OptStatus}
        >
          {mappedStatus}
        </TaskStatusChanger>
      </div>
    );
  }
}

export default StatusCard;

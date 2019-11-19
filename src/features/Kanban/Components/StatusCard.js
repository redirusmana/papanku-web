import React from "react";
import "../Style/style.css";

class StatusCard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* {Deadline, Priority, Status} = Card */}
        <div className="row  p-2">
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div>
              <label className="form-label font-weight-bold" htmlFor="">
                Status
              </label>
              <input
                type="text"
                className={"form-control"}
                placeholder="Status"
              />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div>
              <label className="form-label font-weight-bold" htmlFor="">
                Priority
              </label>
              <input
                type="text"
                className={"form-control"}
                placeholder="Priority"
              />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div>
              <label className="form-label font-weight-bold" htmlFor="">
                DueDate
              </label>
              <input
                type="text"
                className={"form-control"}
                placeholder="DueDate"
              />
            </div>
          </div>
        </div>
        {/* {Deadline, Priority, Status} = Card */}
      </React.Fragment>
    );
  }
}

export default StatusCard;

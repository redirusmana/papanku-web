import React from "react";
import "../Style/style.css";

class CardPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="row p-2">
          {/* List Checklist List Tasl */}
          <div className="col-lg-1">
            <i className="font-weight-light icofont-checked m-3"></i>
          </div>
          <div className="col-lg-19">
            <h3 className="font-weight-bold">Checklist</h3>
            <div>
              <div>Nama Task</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  60%
                </div>
              </div>
              {/* listTask Checklist */}
              <div>
                <div className="custom-control custom-checkbox ">
                  <input type="checkbox" className="custom-control-input" />
                  <label className="custom-control-label">
                    Check this custom checkbox
                  </label>
                </div>
              </div>
              {/* listTask Checklist */}
            </div>
          </div>
          <div className="col-lg-4 text-right">
            <a href={{}} className="btn btn-link">
              <i className=" icofont-plus" /> Add Checklist
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardPage;

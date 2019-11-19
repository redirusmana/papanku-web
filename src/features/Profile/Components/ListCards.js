import React from "react";
import "../Style/style.css";

class ListCards extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* List Board */}
        <div className="col-lg-8 mb-3">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">Nama Board</h5>
              <p className="card-text text-right">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <div className="card-footer text-right">
              <button
                type="button"
                className="btn btn-sm btn-dark font-weight-bold "
              >
                Board
              </button>
            </div>
          </div>
        </div>

        {/* Add new Board */}
        <div className="col-lg-8 ">
          <div className="card button-grey">
            <div className="card-body text-center">
              <h6 className="m-auto py-5 font-weight-bold">Add new Board</h6>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListCards;

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
              <p className="card-title">Nama Board</p>
              <p className="card-text text-right">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <div className="card-footer text-right py-2">
              <button
                type="button"
                className="btn btn-sm btn-success font-weight-bold "
              >
                Board
              </button>
            </div>
          </div>
        </div>

        {/* Add new Board */}
        <div className="col-lg-8 ">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h3 className="my-5 mx-auto py-4 font-weight-bold">
                Add New Board
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListCards;

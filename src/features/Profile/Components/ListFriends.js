import React from "react";
import Avatar from "../../../provider/Display/Avatar";

class ListFriends extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* List Friend */}
        <div className="col-lg-8 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <Avatar
                  name="Martin E"
                  size="xxxl"
                  avatarClass="avatar-link mb-1"
                />
                <h4 className="card-title text-center pt-2">
                  Muhammad Seftikara Al
                </h4>
                <button
                  type="button"
                  className="btn rounded-pill btn-success mr-1"
                >
                  <i className="font-weight-normal icofont-plus-square" />
                  {/* ui-message */}
                  {/* Invite */}
                </button>
                <button
                  type="button"
                  className="btn rounded-pill btn-success ml-1"
                >
                  <i className="font-weight-normal icofont-bin" />
                  {/* Remove / danger*/}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add new Friend */}
        <div className="col-lg-8 mb-3">
          <div className="card p-5">
            <div className="card-body ">
              <div className="text-center">
                <h4 className="text-success ">
                  <i className="icofont-people icofont-5x" />
                  <br /> Tambahkan Teman
                </h4>
              </div>
              <div className="text-center">
                <button type="button" className="btn rounded-pill btn-success ">
                  <i className="font-weight-normal icofont-plus" />
                  {/* Add new Friend */} Teman
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListFriends;

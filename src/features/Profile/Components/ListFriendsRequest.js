import React from "react";
import Avatar from "../../../provider/Display/Avatar";

class ListFriends extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-24 ">
          {/* Request Friend from Other */}
          <div className="row mb-3">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <Avatar
                      name="Martine"
                      size="xxxl"
                      avatarClass="avatar-link mb-1"
                    />
                    <h5 className="card-title text-center">Martin</h5>
                    <h6 className="card-title text-center text-secondary">
                      Martin
                    </h6>
                    <button
                      type="button"
                      className="btn rounded-pill btn-primary mr-1"
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="btn rounded-pill btn-danger ml-1"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Request Friend from Other */}
          <hr />
          {/* Request Friend From Us */}
          <div className="row mb-3">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <Avatar
                      name="Martin E"
                      size="xxxl"
                      avatarClass="avatar-link mb-1"
                    />
                    <h5 className="card-title text-center">Martin</h5>
                    <h6 className="card-title text-center text-secondary">
                      Martin
                    </h6>
                    <button
                      type="button"
                      className="btn rounded-pill btn-warning mr-1"
                    >
                      Cancel Add Friend
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Request Friend From Us */}
        </div>
      </React.Fragment>
    );
  }
}

export default ListFriends;

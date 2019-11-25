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
                    <h4 className="card-title text-center pt-2">Skrean Joy</h4>
                    <button
                      type="button"
                      className="btn rounded-pill btn-success mr-1" //primary
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="btn rounded-pill btn-success ml-1" //primary
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
                    <h4 className="card-title text-center pt-2">Krepoy Toy</h4>
                    <button
                      type="button"
                      className="btn rounded-pill btn-success mr-1" //warning
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

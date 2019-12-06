import React from "react";
import ListSearch from "./ListSearch";
import popConfirm from "../../../provider/Display/popConfirm";
import Avatar from "../../../provider/Display/Avatar";

class ListFriends extends React.PureComponent {
  onAccept = () => {};
  onDecline = () => {
    popConfirm({
      title: `Are you sure to cancel Friend Request?`,
      message: "Friend will deleted on List Request Friend",
      okText: " Yes",
      okType: "danger",
      cancelText: " No"
    });
  };
  onCancelAdd = () => {};
  render() {
    return (
      <React.Fragment>
        <ListSearch />
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
                      onClick={() => this.onAccept()}
                      type="button"
                      className="btn rounded-pill btn-success mr-1" //primary
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => this.onDecline()}
                      type="button"
                      className="btn rounded-pill btn-danger ml-1" //primary
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
                      onClick={() => this.onCancelAdd()}
                      className="btn rounded-pill btn-danger mr-1" //warning
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

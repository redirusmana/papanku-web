import React from "react";
// import get from 'lodash/get';
import ListSearch from "./ListSearch";
import get from 'lodash/get';
import LoadingCard from '../../../provider/Display/LoadingCard';
import popConfirm from "../../../provider/Display/popConfirm";
import Avatar from "../../../provider/Display/Avatar";
// import { assetsApiUrl } from "../../../provider/Tools/general";

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
    const {dataSources,loading} = this.props;

    const listFriendsRequest = 
    Array.isArray(get(dataSources, 'boards')) && get(dataSources, 'boards').length > 0
        ? get(dataSources, 'boards').map(result => (
            <React.Fragment key={`list-friend-request-${result.id}`}>
              <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <Avatar
                      name="Skrean Joy"
                      // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
                      size="xxxl"
                      avatarClass="avatar-link mb-1"
                    />
                    <h4 className="card-title text-center pt-2">Skrean Joy</h4>
                    <button
                      onClick={() => this.onAccept()}
                      type="button"
                      className="btn rounded-pill btn-primary mr-1" //primary
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
            </React.Fragment>))
            : [];

    const listRequestFriend =
    Array.isArray(get(dataSources, 'boards')) && get(dataSources, 'boards').length > 0
        ? get(dataSources, 'boards').map(result => (
            <React.Fragment key={`list-request-friend-${result.id}`}>
              <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <Avatar
                      name="Krepoy To"
                      // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
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
            </React.Fragment>
        ))
        : [];
    
    return (
      <React.Fragment>
        <ListSearch />
        <div className="col-lg-24 ">
          {/* Request Friend from Other */}
          <div className="row mb-3">
            {loading ? <LoadingCard/> :listFriendsRequest  }
          </div>
          {/* Request Friend from Other */}
          <hr />
          {/* Request Friend From Us */}
          <div className="row mb-3">
            {loading ?<LoadingCard/> : listRequestFriend  }
          </div>
          {/* Request Friend From Us */}
        </div>
      </React.Fragment>
    );
  }
}

export default ListFriends;

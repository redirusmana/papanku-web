import React from "react";
import Avatar from "../../../provider/Display/Avatar";

class ProfileMember extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="media">
          <Avatar
            size="lg"
            name="Redi Rusmana"
            // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
            title="Redi Rusmana"
            style={{ margin: ".7rem" }}
          />
          <div
            className="media-body pl-1 align-self-center"
            style={{ fontSize: "16px" }}
          >
            <div className="activity-item-header">
              <div>
                <small>
                  {/* <b className="font-weight-bold">{user.name}</b> {action} */}
                  <b className="font-weight-bold">Redi Rusmana </b>
                </small>
              </div>
              <div className="pl-1">
                <small>
                  {/* <b className="font-weight-bold">{user.name}</b> {action} */}
                  <b className="font-weight-light text-dark">redirsmn </b>
                </small>
              </div>
            </div>
            {/* <div
                    className="card"
                    style={{ whiteSpace: "normal", padding: ".375rem .5rem" }}
                  ></div> */}
          </div>
        </div>
        <div className="d-flex flex-column my-2">
          <div className="p-2  pointer hovered-button-popover">
            Permission <b>(Admin)</b>
          </div>
          <div className="p-2  pointer hovered-button-popover">
            Views Activity
          </div>
          <div className="p-2 pointer hovered-button-popover">
            {/*  mb-1 */}
            Remove From Board..
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileMember;

import React from "react";
import { Link } from "react-router-dom";
import get from "lodash/get";
import Avatar from "../../../provider/Display/Avatar";
import { assetsApiUrl } from "../../../provider/Tools/general";

class ProfileMember extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { results } = this.props;
    const disable = get(results, "role.name") === "admin";
    return (
      <React.Fragment>
        <div className="media">
          <Avatar
            size="lg"
            name={get(results, "user.name")}
            image={
              get(results, "user.avatar_path")
                ? assetsApiUrl(get(results, "user.avatar_path"))
                : undefined
            }
            title={get(results, "user.name")}
            avatarClass="avatar-link m-3"
          />
          <div
            className="media-body pl-1 align-self-center"
            style={{ fontSize: "16px" }}
          >
            <div className="activity-item-header">
              <div>
                <small>
                  <b className="font-weight-bold">
                    {get(results, "user.name")}
                  </b>
                </small>
              </div>
              <div className="pl-1">
                <small>
                  <b className="font-weight-bold">
                    {get(results, "user.name")}
                  </b>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column my-2">
          <div className="p-2  pointer hovered-button-popover text-dark">
            Permission <b>(Admin)</b>
          </div>
          <Link
            to="/user/activity"
            className="p-2 text-dark pointer hovered-button-popover"
          >
            Views Activity
          </Link>
          <div
            // onClick={()=> this.handleRemove()}
            className="p-2 pointer hovered-button-popover text-dark"
            disabled={disable}
          >
            Remove From Board..
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileMember;

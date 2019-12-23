import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../provider/Display/Avatar";
import { assetsApiUrl } from "../../../provider/Tools/general";

class ProfileMember extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { results } = this.props;
    return (
      <React.Fragment>
        <div className="media">
          <Avatar
            size="lg" //name
            name={results.username}
            image={
              results.avatar_path
                ? assetsApiUrl(results.avatar_path)
                : undefined
            }
            title={results.username}
            style={{ margin: ".7rem" }}
          />
          <div
            className="media-body pl-1 align-self-center"
            style={{ fontSize: "16px" }}
          >
            <div className="activity-item-header">
              <div>
                <small>
                  <b className="font-weight-bold">{results.username}</b>
                </small>
              </div>
              <div className="pl-1">
                <small>
                  <b className="font-weight-bold">{results.username}</b>
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
          <div className="p-2 pointer hovered-button-popover text-dark">
            {/*  mb-1 */}
            Remove From Board..
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileMember;

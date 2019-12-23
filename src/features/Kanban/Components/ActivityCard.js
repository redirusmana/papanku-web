import React from "react";
import Avatar from "../../../provider/Display/Avatar";
// import { assetsApiUrl } from "../../../provider/Tools/general";

class ActivityCard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="task-detail-aside-header">
          <div className="task-detail-aside-title">
            <i className="icfont-flag" />
            Activity
          </div>
        </div>
        <div className="task-detail-aside-body">
          <div
            className="media task-detail-activity"
            // key={`activity-${}`}
          >
            <Avatar name={"Redi Rusmana"}
            // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
            title={"Redi Rusmana"} />
            <div className="media-body pl-1 align-self-center">
              <div className="activity-item-header">
                <div>
                  <small>Sains in Actions</small>
                </div>
                <div>
                  <small>13 Januari 2018</small>
                </div>
              </div>
              <div className="card activity-card">
                <div className="card-body">
                  <small>Berkomentar Berkomentar Berkomentar</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ActivityCard;

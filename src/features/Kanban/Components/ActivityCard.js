import React from "react";
import get from "lodash/get";
import Avatar from "../../../provider/Display/Avatar";
import { dateFromNowString } from "../../../provider/Tools/converter";
import { assetsApiUrl } from "../../../provider/Tools/general";

class ActivityCard extends React.PureComponent {
  render() {
    const { dataSource } = this.props;
    const mappedActivity =
      Array.isArray(get(dataSource, "activities")) &&
      get(dataSource, "activitise") > 0
        ? get(dataSource, "activites").map(result => (
            <React.Fragment>
              <div
                className="media task-detail-activity"
                // key={`activity-${}`}
              >
                <Avatar
                  name={result.name}
                  image={
                    result.avatar_path
                      ? assetsApiUrl(result.avatar_path)
                      : undefined
                  }
                  title={result.name}
                />
                <div className="media-body pl-1 align-self-center">
                  <div className="activity-item-header">
                    <div>
                      <small>ACT</small>
                    </div>
                    <div>
                      <small>{dateFromNowString(result.created_at)}</small>
                    </div>
                  </div>
                  <div className="card activity-card">
                    <div className="card-body">
                      <small>Berkomentar Berkomentar Berkomentar</small>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))
        : [];
    return (
      <React.Fragment>
        <div className="task-detail-aside-header">
          <div className="task-detail-aside-title">
            <div className="d-flex align-items-center justify-content-center">
              <div className="mx-auto">
                {/* <button
                  type="button"
                  className="btn btn-md btn-link text-primary"
                > */}
                <i className="icofont-flag" />
                Activity
                {/* </button> */}
              </div>
              {/* <div className="mx-auto">
                <button
                  type="button"
                  className="btn btn-md btn-link text-primary"
                >
                  <i className="icofont-comment" />
                  Comment
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="task-detail-aside-body">{mappedActivity}</div>
      </React.Fragment>
    );
  }
}

export default ActivityCard;

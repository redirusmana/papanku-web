import React from "react";
import Avatar from "../../../provider/Display/Avatar";

class AllNotification extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ maxHeight: 500, overflowY: "auto" }}>
          <div className="media">
            <Avatar
              size="md"
              name="Redi Rusmana"
              // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
              title="Redi Rusmana"
              style={{ margin: ".3rem" }}
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
                    Telah melakukan Sesuatu Telah melakukan Sesuatu Telah
                    melakukan Sesuatu Telah melakukan Sesuatu Telah melakukan
                    Sesuatu Telah melakukan Sesuatu Telah melakukan Sesuatu
                    Telah melakukan Sesuatu Telah melakukan Sesuatu Telah
                    melakukan Sesuatu Telah melakukan Sesuatu on <u>Card</u>
                  </small>
                </div>
                <div>
                  {/* <small>{dateFromNowString(created_at)}</small> */}
                  <small className="font-weight-light">13 minutes ago</small>
                </div>
              </div>
              {/* <div
                    className="card"
                    style={{ whiteSpace: "normal", padding: ".375rem .5rem" }}
                  ></div> */}
            </div>
          </div>
          <div className="media">
            <Avatar
              size="md"
              name="Redi Rusmana"
              // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
              title="Redi Rusmana"
              style={{ margin: ".3rem" }}
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
                    Telah melakukan Sesuatu Telah melakukan Sesuatu Telah
                    melakukan Sesuatu Telah melakukan Sesuatu Telah melakukan
                    Sesuatu Telah melakukan Sesuatu Telah melakukan Sesuatu
                    Telah melakukan Sesuatu Telah melakukan Sesuatu Telah
                    melakukan Sesuatu Telah melakukan Sesuatu on <u>Card</u>
                  </small>
                </div>
                <div>
                  {/* <small>{dateFromNowString(created_at)}</small> */}
                  <small className="font-weight-light">13 minutes ago</small>
                </div>
              </div>
              {/* <div
                    className="card"
                    style={{ whiteSpace: "normal", padding: ".375rem .5rem" }}
                  ></div> */}
            </div>
          </div>
          <div className="media">
            <Avatar
              size="md"
              name="Redi Rusmana"
              // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
              title="Redi Rusmana"
              style={{ margin: ".3rem" }}
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
                    Telah melakukan Sesuatu Telah melakukan Sesuatu Telah
                    melakukan Sesuatu Telah melakukan Sesuatu Telah melakukan
                    Sesuatu Telah melakukan Sesuatu Telah melakukan Sesuatu
                    Telah melakukan Sesuatu Telah melakukan Sesuatu Telah
                    melakukan Sesuatu Telah melakukan Sesuatu on <u>Card</u>
                  </small>
                </div>
                <div>
                  {/* <small>{dateFromNowString(created_at)}</small> */}
                  <small className="font-weight-light">13 minutes ago</small>
                </div>
              </div>
              {/* <div
                    className="card"
                    style={{ whiteSpace: "normal", padding: ".375rem .5rem" }}
                  ></div> */}
            </div>
          </div>
          <div className="media">
            <Avatar
              size="md"
              name="Redi Rusmana"
              // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
              title="Redi Rusmana"
              style={{ margin: ".3rem" }}
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
                    Telah melakukan Sesuatu Telah melakukan Sesuatu Telah
                    melakukan Sesuatu Telah melakukan Sesuatu Telah melakukan
                    Sesuatu Telah melakukan Sesuatu Telah melakukan Sesuatu
                    Telah melakukan Sesuatu Telah melakukan Sesuatu Telah
                    melakukan Sesuatu Telah melakukan Sesuatu on <u>Card</u>
                  </small>
                </div>
                <div>
                  {/* <small>{dateFromNowString(created_at)}</small> */}
                  <small className="font-weight-light">13 minutes ago</small>
                </div>
              </div>
              {/* <div
                    className="card"
                    style={{ whiteSpace: "normal", padding: ".375rem .5rem" }}
                  ></div> */}
            </div>
          </div>

          <div className="card-footer ">
            <u
              className="pointer"
              // onClick={() => this.handleLoadMore()}
            >
              Load More...
            </u>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AllNotification;

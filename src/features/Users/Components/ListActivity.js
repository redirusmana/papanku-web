import React from "react";
import { Empty } from "antd";
import moment from "moment";
// import cn from "classnames";
import Avatar from "../../../provider/Display/Avatar";
import { dateFromNowString } from "../../../provider/Tools/converter";
import get from "lodash/get";
import LoadingCard from "../../../provider/Display/LoadingCard";
import api from "../../../provider/Tools/api";
import { assetsApiUrl } from "../../../provider/Tools/general";

class ListActivity extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 10,
      loadingState: false
    };
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        const { email } = this.props;
        this._requestSource = api.generateCancelToken();
        api
          .get(`/api/${email}`, this._requestSource.token, {
            params: {
              limit: this.state.page
            }
          })
          .then(response => {
            const { data } = response;
            this.setState({
              dataSources: data.data.activities,
              page: data.limit,
              loading: false
            });
          })
          .catch(error => console.log(error));
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        loadingState: true,
        page: prevState.page + 5
      }),
      () => {
        const { email } = this.props;
        this._requestSource = api.generateCancelToken();
        api
          .get(`/api/${email}`, this._requestSource.token, {
            params: {
              limit: this.state.page
            }
          })
          .then(response => {
            const { data } = response;
            this.setState({
              loadingState: false,
              dataSources: data.data,
              page: data.limit
            });
          })
          .catch(error => console.log(error));
      }
    );
  };

  // cnBgClass = index => {
  //   return cn({
  //     "bg-light": index % 2 === 1
  //   });
  // };

  render() {
    const { loadingState, loading, dataSources } = this.state;

    const ListActivities =
      Array.isArray(dataSources) && dataSources.length > 0 ? (
        dataSources.map(result => {
          let badge1 = null;
          let badge2 = null;
          let badge3 = null;
          let badge4 = null;

          const inList = get(result, "after.depends.title") ? (
            <React.Fragment>
              - In List{" "}
              <b className="font-weight-bold">
                {get(result, "after.depends.title")}
              </b>
            </React.Fragment>
          ) : (
            ""
          );

          const onBoard = get(result, "after.depends.depends.title") ? (
            <React.Fragment>
              - on Board{" "}
              <b className="font-weight-bold">
                {get(result, "after.depends.depends.title")}
              </b>
            </React.Fragment>
          ) : (
            ""
          );
          if (get(result, "before.status") === "Not Started") {
            badge1 = "info";
          } else if (get(result, "before.status") === "In Progress") {
            badge1 = "primary";
          } else if (get(result, "before.status") === "Delayed") {
            badge1 = "warning";
          } else if (get(result, "before.status") === "Done") {
            badge1 = "success";
          } else if (get(result, "before.status") === "Dropped") {
            badge1 = "danger";
          }

          if (get(result, "after.status") === "Not Started") {
            badge2 = "info";
          } else if (get(result, "after.status") === "In Progress") {
            badge2 = "primary";
          } else if (get(result, "after.status") === "Delayed") {
            badge2 = "warning";
          } else if (get(result, "after.status") === "Done") {
            badge2 = "success";
          } else if (get(result, "after.status") === "Dropped") {
            badge2 = "danger";
          }

          if (get(result, "before.priority") === "Low Priority") {
            badge3 = "success";
          } else if (get(result, "before.priority") === "Medium Priority") {
            badge3 = "warning";
          } else if (get(result, "before.priority") === "High Priority") {
            badge3 = "danger";
          }

          if (get(result, "after.priority") === "Low Priority") {
            badge4 = "success";
          } else if (get(result, "after.priority") === "Medium Priority") {
            badge4 = "warning";
          } else if (get(result, "after.priority") === "High Priority") {
            badge4 = "danger";
          }

          return (
            <React.Fragment
              key={`list-activitys-${result.id}-${result.historiable_id}`}
            >
              <div className={`media `}>
                <Avatar
                  size="md"
                  name={get(result, "user.name")}
                  title={get(result, "user.name")}
                  image={
                    get(result, "user.avatar_path")
                      ? assetsApiUrl(get(result, "user.avatar_path"))
                      : undefined
                  }
                  avatarClass="avatar-link m-1"
                />
                <div
                  className="media-body pl-1 align-self-center"
                  style={{ fontSize: "16px" }}
                >
                  <div className="activity-item-header">
                    <div>
                      <small>
                        <b className="font-weight-bold">
                          {get(result, "user.name")}
                        </b>{" "}
                        {result.event}{" "}
                        {result.attribute === "card" ? "" : result.attribute}
                      </small>
                    </div>
                    <div>
                      <small className="font-weight-light">
                        {dateFromNowString(result.created_at)} {inList}{" "}
                        {onBoard}
                      </small>
                    </div>
                  </div>
                  <div className="card activity-card">
                    <div className="card-body">
                      {result.event === "has created new" && (
                        <React.Fragment>
                          {result.attribute === "board" && (
                            <div>
                              <small>
                                <b>{get(result, "after.title")}</b>{" "}
                                {result.attribute}
                              </small>
                            </div>
                          )}
                          {result.attribute === "list" && (
                            <div>
                              <small>
                                <b>{get(result, "after.title")}</b>{" "}
                                {result.attribute}
                              </small>
                            </div>
                          )}
                          {result.attribute === "card" && (
                            <div>
                              <small>
                                <b>{get(result, "after.title")}</b>{" "}
                                {result.attribute}
                              </small>
                            </div>
                          )}
                        </React.Fragment>
                      )}

                      {result.attribute === "user" && (
                        <React.Fragment>
                          <div>
                            <Avatar
                              size="sm"
                              name={get(result, "after.name")}
                              title={get(result, "after.name")}
                              image={
                                get(result, "after.avatar_path")
                                  ? assetsApiUrl(
                                      get(result, "after.avatar_path")
                                    )
                                  : undefined
                              }
                              avatarClass="avatar-link "
                            />
                            <small>
                              {/* From :{" "} */}
                              <b className="pl-2">
                                {get(result, "after.name")}
                              </b>
                            </small>
                          </div>
                        </React.Fragment>
                      )}

                      {result.event === "has updated" && (
                        <React.Fragment>
                          {result.attribute === "list" && (
                            <div>
                              <small>
                                <b>Updated</b> Title List
                                <br />
                                From : <del>{get(result, "before")}</del>
                                <br />
                                To :{" "}
                                <b className="pt-2">{get(result, "after")}</b>
                                <br />
                              </small>
                            </div>
                          )}
                        </React.Fragment>
                      )}

                      {result.event === "has updated card" && (
                        <React.Fragment>
                          <div>
                            {get(result, "before.title") &&
                              get(result, "after.title") && (
                                <div>
                                  <small>
                                    <b>Updated</b> Title Card
                                    <br />
                                    From :{" "}
                                    <del>{get(result, "before.title")}</del>
                                    <br />
                                    To :{" "}
                                    <b className="pt-2">
                                      {get(result, "after.title")}
                                    </b>
                                    <br />
                                  </small>
                                </div>
                              )}

                            {get(result, "before.description") === null &&
                              get(result, "after.description") && (
                                <div>
                                  <small>
                                    <b>Added</b> description{" "}
                                    <b>"{get(result, "after.description")}"</b>
                                    <br />
                                  </small>
                                </div>
                              )}

                            {get(result, "before.description") &&
                              get(result, "after.description") && (
                                <div>
                                  <small>
                                    <b>Updated</b> Description <br />
                                    From :{" "}
                                    <del>
                                      {get(result, "before.description")}
                                    </del>
                                    <br />
                                    To :{" "}
                                    <b className="pt-2">
                                      {get(result, "after.description")}
                                    </b>
                                    <br />
                                  </small>
                                </div>
                              )}

                            {get(result, "before.due_date") === null &&
                              get(result, "after.due_date") && (
                                <div>
                                  <small>
                                    <b>Added</b> Due Date <br />
                                    <b>
                                      "
                                      {moment(
                                        get(result, "after.due_date")
                                      ).format("YYYY-MM-DD")}
                                      "
                                    </b>
                                    <br />
                                  </small>
                                </div>
                              )}

                            {get(result, "before.due_date") &&
                              get(result, "after.due_date") && (
                                <div>
                                  <small>
                                    <b>Updated</b> Due Date <br />
                                    From :{" "}
                                    <del>
                                      m
                                      {moment(
                                        get(result, "before.due_date")
                                      ).format("YYYY-MM-DD")}
                                    </del>
                                    <br />
                                    To :{" "}
                                    <b className="pt-2">
                                      {moment(
                                        get(result, "after.due_date")
                                      ).format("YYYY-MM-DD")}
                                    </b>
                                    <br />
                                  </small>
                                </div>
                              )}

                            {get(result, "before.status") === null &&
                              get(result, "after.status") && (
                                <div>
                                  <small>
                                    <b>Added</b> Status <br />
                                    <span
                                      className={` badge badge-${badge2} mt-1`}
                                    >
                                      {get(result, "after.status")}
                                    </span>
                                    <br />
                                  </small>
                                </div>
                              )}

                            {get(result, "before.status") &&
                              get(result, "after.status") && (
                                <div>
                                  <small>
                                    <b>Updated</b> Status <br />
                                    <span
                                      className={` badge badge-${badge1} mb-1`}
                                    >
                                      <del>{get(result, "before.status")}</del>
                                    </span>
                                    <br />
                                    <span
                                      className={` badge badge-${badge2} mt-1`}
                                    >
                                      {get(result, "after.status")}
                                    </span>
                                    <br />
                                  </small>
                                </div>
                              )}

                            {get(result, "before.priority") === null &&
                              get(result, "after.priority") && (
                                <div>
                                  <small>
                                    <b>Added</b> Priority <br />
                                    <span
                                      className={` badge badge-${badge4} mt-1`}
                                    >
                                      {get(result, "after.priority")}
                                    </span>
                                    <br />
                                  </small>
                                </div>
                              )}

                            {get(result, "before.priority") &&
                              get(result, "after.priority") && (
                                <div>
                                  <small>
                                    <b>Updated</b> Priority <br />
                                    <span
                                      className={` badge badge-${badge3} mb-1`}
                                    >
                                      <del>
                                        {get(result, "before.priority")}
                                      </del>
                                    </span>
                                    <br />
                                    <span
                                      className={` badge badge-${badge4} mt-1`}
                                    >
                                      {get(result, "after.priority")}
                                    </span>
                                    <br />
                                  </small>
                                </div>
                              )}
                          </div>
                        </React.Fragment>
                      )}

                      {result.event === "has commented" && (
                        <small>{get(result, "after.comment")}</small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })
      ) : (
        <React.Fragment>
          <div className="col-lg-24 text-center ">
            <Empty description={"Activity is Not Found"} />
          </div>
        </React.Fragment>
      );

    if (loading) {
      return <LoadingCard />;
    }

    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h5>
                <i className="icofont-listine-dots" /> Activity
              </h5>
              <hr />

              {ListActivities}
              {loadingState && <LoadingCard />}
            </div>
            <div className="card-footer ">
              {ListActivities.length > 9 && (
                <button
                  type="button"
                  className="btn btn-link text-dark"
                  onClick={() => this.handleLoadMore()}
                >
                  <u>Load More...</u>
                </button>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListActivity;

import React from "react";
import { Empty } from "antd";
import cn from "classnames";
import Avatar from "../../../provider/Display/Avatar";
import { dateFromNowString } from "../../../provider/Tools/converter";
import get from "lodash/get";
import LoadingCard from "../../../provider/Display/LoadingCard";
import api from "../../../provider/Tools/api";
// import {
//   axiosError,
//   AXIOS_CANCEL_MESSAGE
// } from "../../../provider/Tools/converter";
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
        this._requestSource = api.generateCancelToken();
        api
          .get(`/api/profile/activities`, this._requestSource.token, {
            params: {
              limit: this.state.page
            }
          })
          .then(response => {
            const { data } = response;
            this.setState({
              dataSources: data.data,
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
        this._requestSource = api.generateCancelToken();
        api
          .get(`/api/profile/activities`, this._requestSource.token, {
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

  cnBgClass = index => {
    return cn({
      "bg-light": index % 2 === 1
    });
  };

  render() {
    const { loadingState, loading, dataSources } = this.state;

    const ListActivities =
      Array.isArray(dataSources) && dataSources.length > 0 ? (
        dataSources.map((result, index) => (
          <React.Fragment
            key={`list-activitys-${result.id}-${result.historiable_id}`}
          >
            <div className={`media ${this.cnBgClass(index)}`}>
              <Avatar
                size="md"
                name={get(result, "user.name")}
                title={get(result, "user.name")}
                image={
                  get(result, "user.avatar_path")
                    ? // ? assetsApiUrl(get(result, "user.avatar_path"))
                      assetsApiUrl(get(result, "user.avatar_path"))
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
                      {result.event} {result.attribute}
                    </small>
                  </div>
                  <div>
                    <small className="font-weight-light">
                      {dateFromNowString(result.created_at)} - On Board{" "}
                      <b className="font-weight-bold">
                        {/* {get(result, "after.title", "")} */}
                      </b>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))
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
              {ListActivities.length > 10 && (
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

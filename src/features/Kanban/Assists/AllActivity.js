import React from "react";
import { Empty } from "antd";
import get from "lodash/get";
import Avatar from "../../../provider/Display/Avatar";
import LoadingCard from "../../../provider/Display/LoadingCard";
import api from "../../../provider/Tools/api";
import { dateFromNowString } from "../../../provider/Tools/converter";
import { assetsApiUrl } from "../../../provider/Tools/general";

class AllActivity extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 10,
      loadingState: false,
      loading: false
    };
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities = () => {
    const { idBoard } = this.props;
    this.setState(
      {
        loading: true
      },
      () => {
        this._requestSource = api.generateCancelToken();
        api
          .get(`/api/board/${idBoard}/activities`, this._requestSource.token, {
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

  handleLoadMore = idBoard => {
    this.setState(
      prevState => ({
        loadingState: true,
        page: prevState.page + 10
      }),
      () => {
        this._requestSource = api.generateCancelToken();
        api
          .get(`/api/board/${idBoard}/activities`, this._requestSource.token, {
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

  render() {
    const { loadingState, dataSources, loading } = this.state;
    const { idBoard } = this.props;

    if (loading) {
      return <LoadingCard />;
    }
    const mappedActivity =
      Array.isArray(dataSources) && dataSources.length > 0 ? (
        dataSources.map(result => (
          <React.Fragment
            key={`list-activity-on-board-${result.id}-${result.historiable_id}`}
          >
            <div className="media">
              <Avatar
                size="md"
                name={get(result, "user.name")}
                image={
                  get(result, "user.avatar_path")
                    ? assetsApiUrl(get(result, "user.avatar_path"))
                    : undefined
                }
                title={get(result, "user.name")}
                style={{ margin: ".3rem" }}
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
                      {result.event} {get(result, "after.title")} on <u>Card</u>
                    </small>
                  </div>
                  <div>
                    <small className="font-weight-light">
                      {dateFromNowString(result.created_at)}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))
      ) : (
        <React.Fragment>
          <div className="col-lg-24 text-center">
            <Empty description={"Activity Not Found"} />
          </div>
        </React.Fragment>
      );
    return (
      <React.Fragment>
        {mappedActivity}
        {loadingState && <LoadingCard />}

        <div className="card-footer ">
          <u className="pointer" onClick={() => this.handleLoadMore(idBoard)}>
            Load More...
          </u>
        </div>
      </React.Fragment>
    );
  }
}

export default AllActivity;

import React from "react";
import { Empty } from "antd";
// import get from "lodash/get";
// import Avatar from "../../../provider/Display/Avatar";
// import api from "../../../provider/Tools/api";
import LoadingCard from "../../../provider/Display/LoadingCard";
import { dateFromNowString } from "../../../provider/Tools/converter";
// import { assetsApiUrl } from "../../../provider/Tools/general";

class AllNotification extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 10,
      loadingState: false,
      loading: false
    };
  }

  // componentDidMount() {
  //   this.getNotifications();
  // }

  // getNotifications = () => {
  //   const { idBoard } = this.props;
  //   this.setState(
  //     {
  //       loading: true
  //     },
  // () => {
  //   this._requestSource = api.generateCancelToken();
  //   api
  //     .get(`/api/board/${idBoard}/notifications`, this._requestSource.token, {
  //       params: {
  //         limit: this.state.page
  //       }
  //     })
  //     .then(response => {
  //       const { data } = response;
  //       this.setState({
  //         loadingState: false,
  //         dataSources: data.data,
  //         page: data.limit
  //       });
  //     })
  //     .catch(error => console.log(error));
  // }
  //   );
  // };

  handleLoadMore = () => {
    this.setState(prevState => ({
      loadingState: true,
      page: prevState.page + 10
    }));
    // ,() => {
    //   const { user } = this.props;
    //   const { page } = this.state;
    //   this._requestSource = api.generateCancelToken();
    //   api.get(`/api/board/${idBoard}/notifications`, this._requestSource.token
    //   // ,{
    //   //   params: {
    //   //       page: this.state.page,
    //   //   }
    //   // }
    //   )
    //     .then(response => {
    //       const { data } = response;
    //       this.setState({
    //         loadingState:false
    //       });
    //     }).catch(error => console.log(error));
    // }
  };

  render() {
    const { loadingState } = this.state;
    const { notifications } = this.props;
    // if(loading){
    //   return <LoadingCard/>
    // }

    const mappedNotification =
      Array.isArray(notifications) && notifications.length > 0 ? (
        notifications.map(result => (
          <React.Fragment
            key={`list-notification-on-board-${result.id}-${result.notifiable_id}`}
          >
            <div className="media">
              {/* <Avatar
                size="md"
                name={get(result, "user.name")}
                image={
                  get(result, "user.avatar_path")
                    ? assetsApiUrl(get(result, "user.avatar_path"))
                    : undefined
                }
                title={get(result, "user.name")}
            avatarClass="avatar-link m-3"
              /> */}
              <div
                className="media-body pl-1 align-self-center"
                style={{ fontSize: "16px" }}
              >
                <div className="activity-item-header">
                  <div>
                    <small>
                      {/* <b className="font-weight-bold">
                        {get(result, "user.name")}
                      </b>{" "} */}
                      {result.messages}
                      {/* on <u>Card</u> */}
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
            <Empty description={"Notification Not Found"} />
          </div>
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <div style={{ maxHeight: 500, overflowY: "auto", marginRight: 10 }}>
          {mappedNotification}
          {loadingState && <LoadingCard />}

          <div className="card-footer ">
            <u className="pointer" onClick={() => this.handleLoadMore()}>
              Load More...
            </u>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AllNotification;

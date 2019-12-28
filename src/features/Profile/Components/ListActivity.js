import React from "react";
import Avatar from "../../../provider/Display/Avatar";
import get from "lodash/get";
import LoadingCard from "../../../provider/Display/LoadingCard";
import api from "../../../provider/Tools/api";
// import {
//   axiosError,
//   AXIOS_CANCEL_MESSAGE
// } from "../../../provider/Tools/converter";
// import { assetsApiUrl } from "../../../provider/Tools/general";

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
          .get(`/api/profile`, this._requestSource.token)
          .then(response => {
            const { data } = response;
            this.setState({
              dataSources: data.data,
              loading: false
            });
          })
          .catch(error => console.log(error));
      }
    );
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      loadingState: true,
      page: prevState.page + 10
    }));
    // ,() => {
    //   const { user } = this.props;
    //   const { page } = this.state;
    //   this._requestSource = api.generateCancelToken();
    //   api.get(`/api/${user.email}/activity/${page}`, this._requestSource.token
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
    const { loadingState, loading, page, dataSources } = this.state;

    const ListActivity =
      Array.isArray(get(dataSources, "activities")) &&
      get(dataSources, "activities").length > 0 ? (
        get(dataSources, "activities").map(result => (
          <React.Fragment key={`list-activitys-${result.id}`}>
            <div className="media">
              <Avatar
                size="md"
                name="Redi Rusmana"
                title="Redi Rusmana"
                // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
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
                      melakukan Sesuatu Telah melakukan Sesuatu.
                    </small>
                  </div>
                  <div>
                    {/* <small>{dateFromNowString(created_at)}</small> */}
                    <small className="font-weight-light">
                      13 minutes ago - On Board{" "}
                      <b className="font-weight-bold">'something'</b>
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
            <h1 className="text-center font-weight-bold pt-5">
              No One Activity
            </h1>
          </div>
        </React.Fragment>
      );

    if (dataSources === page) {
      return undefined;
    }
    if (loading) {
      return <LoadingCard />;
    }

    console.log(loading);

    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <h5>
                <i className="icofont-listine-dots" /> Activity
              </h5>
              <hr />

              {ListActivity}
              {loadingState && <LoadingCard />}
            </div>
            <div className="card-footer ">
              <button
                type="button"
                className="btn btn-link text-dark"
                onClick={() => this.handleLoadMore()}
              >
                <u>Load More...</u>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListActivity;

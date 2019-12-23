import React from "react";
import Avatar from "../../../provider/Display/Avatar";
import LoadingCard from "../../../provider/Display/LoadingCard";
// import { assetsApiUrl } from "../../../provider/Tools/general";

class ListActivity extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 10,
      loadingState: false
    };
  }

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
    const { loadingState, page } = this.state;
    const { dataSources, loading } = this.props;
    if (dataSources === page) {
      return undefined;
    }
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
                        melakukan Sesuatu Telah melakukan Sesuatu Telah
                        melakukan Sesuatu Telah melakukan Sesuatu Telah
                        melakukan Sesuatu Telah melakukan Sesuatu Telah
                        melakukan Sesuatu Telah melakukan Sesuatu Telah
                        melakukan Sesuatu.
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

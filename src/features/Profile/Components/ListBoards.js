import React from "react";
import { Link } from "react-router-dom";
import get from "lodash/get";
import { dateFromNowString } from "../../../provider/Tools/converter";
import LoadingCard from "../../../provider/Display/LoadingCard";
import Modal from "../../../provider/Display/Modal";
import popConfirm from "../../../provider/Display/popConfirm";
import FormCreateBoard from "../Modal/FormCreateBoard";
import api from "../../../provider/Tools/api";
import "../Style/style.css";

class ListBoard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    this.getBoards();
  }

  getBoards = () => {
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

  handleModal = () => {
    this.setState({
      isVisible: true
    });
  };

  handleClose = () => {
    this.setState({
      isVisible: false
    });
  };

  handleLoading = isLoading => {
    this.setState({
      loading: isLoading
    });
  };

  handleReplace = newDataSource => {
    this.setState({
      dataSources: newDataSource
    });
  };

  onAccept = () => {};
  onDecline = () => {
    popConfirm({
      title: `Are you sure to remove this Board?`,
      message: "Name Board will deleted permanently",
      okText: " Yes",
      okType: "danger",
      cancelText: " No"
    });
  };
  onCancelAdd = () => {};
  render() {
    const { isVisible, dataSources, loading } = this.state;
    const listBoards =
      Array.isArray(get(dataSources, "boards")) &&
      get(dataSources, "boards").length > 0
        ? get(dataSources, "boards").map(result => (
            <React.Fragment key={`list-board-${result.id}`}>
              <div className="col-lg-8 mb-3">
                <div className="card ">
                  <div className="card-body">
                    <p className="card-title">{result.title}</p>
                    <p className="card-text text-right">
                      <small className="text-muted">
                        last Updated {dateFromNowString(result.created_at)}
                      </small>
                    </p>
                  </div>
                  <div className="card-footer text-right py-2">
                    <Link
                      to={`/board/${result.id}`}
                      className="btn btn-sm btn-primary font-weight-bold "
                    >
                      Board
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))
        : [];

    // const listBoardInvited =
    //   Array.isArray(get(dataSources, "inivited_boards")) &&
    //   get(dataSources, "inivited_boards").length > 0
    //     ? get(dataSources, "inivited_boards").map(result => (
    //         <React.Fragment key={`list-board-invited-${result.id}`}>
    //           <div className="col-lg-8 mb-3">
    //             <div className="card ">
    //               <div className="card-body">
    //                 <p className="card-title">{result.title}</p>
    //                 <p className="card-text text-right">
    //                   <small className="text-muted">
    //                     <b>redirsmn </b> Added you to <b>{result.title}</b>
    //                   </small>
    //                 </p>
    //               </div>
    //               <div className="card-footer text-right py-2">
    //                 <button
    //                   onClick={() => this.onAccept()}
    //                   type="button"
    //                   className="btn btn-sm rounded-pill btn-primary mr-1" //primary
    //                 >
    //                   Accept
    //                 </button>
    //                 <button
    //                   onClick={() => this.onDecline()}
    //                   type="button"
    //                   className="btn btn-sm rounded-pill btn-danger ml-1" //primary
    //                 >
    //                   Decline
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </React.Fragment>
    //       ))
    //     : <React.Fragment>
    //          <div className="col-lg-24 text-center ">
    //           {/*<h1 className="text-center font-weight-bold pt-5"> */}
    //            <Empty description={"Board is Not Found"} />
    //           {/* </h1> */}
    //          </div>
    //       </React.Fragment>;

    return (
      <React.Fragment>
        {/* List Board */}
        <div className="col-lg-24 ">
          {/* Request Friend from Other */}
          <div className="row mb-3">
            {loading ? (
              <LoadingCard />
            ) : (
              <React.Fragment>
                {listBoards}
                <div className="col-lg-8 ">
                  <div className="card bg-light">
                    <div
                      className="card-body text-center pointer"
                      onClick={() => this.handleModal()}
                    >
                      <h3 className="my-5 mx-auto py-4 font-weight-bold">
                        Add New Board
                      </h3>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
          {/* Request Friend from Other */}
          <hr />
          {/* Request Friend From Us */}
          <div className="row mb-3">
            {loading ? (
              <LoadingCard />
            ) : (
              <React.Fragment>
                {/* {listBoardInvited} */}
              </React.Fragment>
            )}
          </div>
        </div>

        <Modal
          title="Create New Board "
          visible={isVisible}
          size="small"
          handleBack={this.handleClose}
        >
          <div className="container">
            <FormCreateBoard
              handleReplace={this.handleReplace}
              handleLoading={this.handleLoading}
              handleClose={this.handleClose}
            />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ListBoard;

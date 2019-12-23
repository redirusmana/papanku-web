import React from "react";
import { Link } from "react-router-dom";
import get from 'lodash/get';
import { dateFromNowString } from '../../../provider/Tools/converter';
import LoadingCard from '../../../provider/Display/LoadingCard';
import Modal from "../../../provider/Display/Modal";
import popConfirm from "../../../provider/Display/popConfirm";
import FormCreateBoard from "../Modal/FormCreateBoard";
import "../Style/style.css";

class ListBoard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
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
    const { isVisible } = this.state;
    const {dataSources,loading} = this.props;
    const listBoards = 
        Array.isArray(get(dataSources, 'boards')) && get(dataSources, 'boards').length > 0
        ? get(dataSources, 'boards').map(result => (
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

    const listBoardInvited = 
        Array.isArray(get(dataSources, 'boards')) && get(dataSources, 'boards').length > 0
        ? get(dataSources, 'boards').map(result => (
            <React.Fragment key={`list-board-invited-${result.id}`}>
            <div className="col-lg-8 mb-3">
              <div className="card ">
                <div className="card-body">
                  <p className="card-title">{result.title}</p>
                  <p className="card-text text-right">
                    <small className="text-muted">
                      <b>redirsmn </b> Added you to <b>{result.title}</b>
                    </small>
                  </p>
                </div>
                <div className="card-footer text-right py-2">
                  <button
                    onClick={() => this.onAccept()}
                    type="button"
                    className="btn btn-sm rounded-pill btn-primary mr-1" //primary
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => this.onDecline()}
                    type="button"
                    className="btn btn-sm rounded-pill btn-danger ml-1" //primary
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>              
            </React.Fragment>
            ))
            : undefined;

    return (
      <React.Fragment>
        {/* List Board */}
        <div className="col-lg-24 ">
          {/* Request Friend from Other */}
          <div className="row mb-3">
          {loading ? <LoadingCard /> : 
          (
            <React.Fragment>
            {listBoards}
            <div className="col-lg-8 ">
              <div className="card bg-light">
                <div
                  className="card-body text-center pointer"
                  onClick={() => this.handleModal()}
                >
                  <h3 className="my-5 mx-auto py-4 font-weight-bold">
                    {/* <button type="button" className="btn btn-link btn-primary"> */}
                    Add New Board
                    {/* </button> */}
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
          {loading ? <LoadingCard /> : 
          (
            <React.Fragment>
            {listBoardInvited}
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
            <FormCreateBoard />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ListBoard;

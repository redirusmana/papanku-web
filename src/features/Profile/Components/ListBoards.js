import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../../provider/Display/Modal";
import popConfirm from "../../../provider/Display/popConfirm";
import FormCreateBoard from "../Modal/FormCreateBoard";
import "../Style/style.css";

class ListBoard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
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
    return (
      <React.Fragment>
        {/* List Board */}
        <div className="col-lg-24 ">
          {/* Request Friend from Other */}
          <div className="row mb-3">
            <div className="col-lg-8 mb-3">
              <div className="card ">
                <div className="card-body">
                  <p className="card-title">Name Board</p>
                  <p className="card-text text-right">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div className="card-footer text-right py-2">
                  <Link
                    to="/board"
                    className="btn btn-sm btn-primary font-weight-bold "
                  >
                    Board
                  </Link>
                  {/* <button
                type="button"
                className="btn btn-sm btn-primary font-weight-bold "
              >
                Board
              </button> */}
                </div>
              </div>
            </div>
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
          </div>
          {/* Request Friend from Other */}
          <hr />
          {/* Request Friend From Us */}
          <div className="row mb-3">
            <div className="col-lg-8 mb-3">
              <div className="card ">
                <div className="card-body">
                  <p className="card-title">Name Board</p>
                  <p className="card-text text-right">
                    <small className="text-muted">
                      <b>redirsmn </b> Added you to <b>Board</b>
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
                  {/* <button
                type="button"
                className="btn btn-sm btn-primary font-weight-bold "
              >
                Board
              </button> */}
                </div>
              </div>
            </div>
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

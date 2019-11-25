import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../../provider/Display/Modal";
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
  render() {
    const { isVisible } = this.state;
    return (
      <React.Fragment>
        {/* List Board */}
        <div className="col-lg-8 mb-3">
          <div className="card ">
            <div className="card-body">
              <p className="card-title">Nama Board</p>
              <p className="card-text text-right">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <div className="card-footer text-right py-2">
              <Link
                to="/board"
                className="btn btn-sm btn-success font-weight-bold "
              >
                Board
              </Link>
              {/* <button
                type="button"
                className="btn btn-sm btn-success font-weight-bold "
              >
                Board
              </button> */}
            </div>
          </div>
        </div>

        {/* Add new Board */}
        <div className="col-lg-8 ">
          <div className="card bg-light">
            <div
              className="card-body text-center pointer"
              onClick={() => this.handleModal()}
            >
              <h3 className="my-5 mx-auto py-4 font-weight-bold">
                {/* <button type="button" className="btn btn-link btn-success"> */}
                Add New Board
                {/* </button> */}
              </h3>
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

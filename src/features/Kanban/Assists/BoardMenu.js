import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../../provider/Display/Modal";
import InputSearch from "../../../provider/Commons/InputSearch";
import "../Style/style.css";
import FormCreateBoard from "../../Profile/Modal/FormCreateBoard";

class BoardMenu extends React.PureComponent {
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
    const { boards } = this.props;

    const listBoard =
      Array.isArray(boards) && boards.length > 0
        ? boards.map(result => (
            <React.Fragment key={`list-board-dropdown-${result.id}`}>
              <Link
                to={`/board/${result.id}`}
                className="p-2 text-dark pointer hovered-button-popover pointer "
              >
                <b>{result.title}</b>
              </Link>
            </React.Fragment>
          ))
        : [];

    return (
      <React.Fragment>
        {/* List Board */}
        <div className="mb-2 m-3">
          <InputSearch
            initialSearch={""}
            placeholder="Search Board"
            // onSearchChange={value => this.beginSearch(value)}
            autoFocus={!!"title"}
          />
        </div>
        <div className="d-flex flex-column my-2 px-0">{listBoard}</div>
        <div className="text-left">
          <button
            type="button"
            onClick={() => this.handleModal()}
            className="btn btn-link text-primary font-weight-bold"
          >
            <u>Create New Board...</u>
          </button>
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

export default BoardMenu;
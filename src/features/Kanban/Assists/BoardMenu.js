import React from "react";
// import { Link } from "react-router-dom";
import get from "lodash/get";
// import InputSearch from "../../../provider/Commons/InputSearch";
import Modal from "../../../provider/Display/Modal";
import "../Style/style.css";
import FormCreateBoardTwo from "../../Profile/Modal/FormCreateBoardTwo";

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
    const { data, ...restProps } = this.props;

    const listBoard =
      Array.isArray(get(data, "boards")) && get(data, "boards").length > 0
        ? get(data, "boards").map(result => (
            <React.Fragment key={`list-board-dropdown-${result.id}`}>
              <div
                // to={`/board/${result.id}`}
                className="p-2 text-dark pointer hovered-button-popover pointer "
              >
                <b>{result.title}</b>
              </div>
            </React.Fragment>
          ))
        : [];

    return (
      <React.Fragment>
        <div className="mb-2 m-3">
          {/* <InputSearch
            initialSearch={""}
            placeholder="Search Board"
            onSearchChange={value => this.beginSearch(value)}
            autoFocus={!!"title"}
          /> */}
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
            <FormCreateBoardTwo {...restProps} />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default BoardMenu;

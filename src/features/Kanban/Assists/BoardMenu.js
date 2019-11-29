import React from "react";
import { Link } from "react-router-dom";
import "../Style/style.css";
import InputSearch from "../../../provider/Commons/InputSearch";

class BoardMenu extends React.PureComponent {
  render() {
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
        <div className="d-flex flex-column my-2 px-0">
          {/* <Link
            to="/board"
            className="p-2 text-dark pointer hovered-button-popover pointer m-1 "
          >
            <b>Nama Board</b>
          </Link>
          <Link
            to="/board"
            className="p-2 text-dark pointer hovered-button-popover pointer m-1 "
          >
            <b>Nama Board</b>
          </Link> */}
          <Link to="/board" className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </Link>

          <Link to="/board" className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </Link>
        </div>
        <div className="text-left">
          <button
            type="submit"
            className="btn btn-link text-success font-weight-bold"
          >
            <u>Create New Board...</u>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default BoardMenu;

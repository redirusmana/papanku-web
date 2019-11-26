import React from "react";
import "../Style/style.css";
import InputSearch from "../../../provider/Commons/InputSearch";

class BoardMenu extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* List Board */}
        <div className="mb-2 mx-0">
          <InputSearch
            initialSearch={""}
            placeholder="Search Board"
            // onSearchChange={value => this.beginSearch(value)}
            autoFocus={!!"title"}
          />
        </div>
        <div className="d-flex flex-column my-2 px-0">
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          {/* <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div>
          <div className="p-2 btn-light pointer m-1 rounded">
            <b>Nama Board</b>
          </div> */}
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

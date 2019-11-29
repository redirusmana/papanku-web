import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import TextareaAutosize from "../../../provider/Commons/TextareaAutosize";

class FormEditTitleCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      renamingTitle: undefined,
      renamingTitleName: "Title Card"
      // renamingTitleName: ""
    };
  }

  onTitleRenamingStop = e => {
    e.preventDefault(e);
    this.setState({
      renamingTitle: null,
      renamingTitleName: ""
    });
  };

  onTitleRenamingChange = e => {
    const { value } = e.target;
    this.setState({
      renamingTitleName: value
    });
  };

  onTitleRenamingKeypress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.onTitleRenamingStop(e);
    }
  };

  render() {
    const { renamingTitle, renamingTitleName } = this.state;
    return (
      <div className="d-flex flex-row flex-nowrap justify-content-between align-items-center pt-1 pl-1">
        {renamingTitle ? (
          <TextareaAutosize
            inputClassName="form-control"
            value={renamingTitleName}
            onTextChange={this.onTitleRenamingChange}
            onKeyPress={this.onTitleRenamingKeypress}
            onBlur={this.onTitleRenamingStop}
            autoFocus
          />
        ) : (
          <h5 className="mb-0">{renamingTitleName}</h5>
        )}
        <div>
          <UncontrolledDropdown tag="span">
            <DropdownToggle tag="button" className="btn btn-sm btn-icon">
              <i className="icofont-navigation-menu" />
              {/* <i className="icofont-listine-dots" /> */}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag="button" type="button">
                <i className="icofont-edit" /> Rename
              </DropdownItem>
              <DropdownItem tag="button" type="button" className="text-danger">
                <i className="icofont-bin" /> Remove
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    );
  }
}

export default FormEditTitleCard;

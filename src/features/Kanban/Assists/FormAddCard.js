import React from "react";
import "moment/locale/id";
import TextareaAutosize from "../../../provider/Commons/TextareaAutosize";

const initialTitle = "";

class FormAddCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      title: initialTitle
    };
  }

  openEditable = () => {
    this.setState({
      editable: true
    });
  };

  closeEditable = () => {
    this.setState({
      editable: false,
      title: ""
    });
  };

  handleTitleChange = e => {
    const { value } = e.target;
    this.setState({
      title: value
    });
  };

  handleTitleKeypress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleSubmit(e);
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.title !== initialTitle) {
      this.createCard(this.state.title);
    }

    this.closeEditable();
  };

  render() {
    const { editable, title } = this.state;

    if (editable) {
      return (
        <form onSubmit={this.handleSubmit} className="kanban-column-header">
          <div className="form-group">
            <TextareaAutosize
              placeholder="Enter Card title"
              inputClassName="form-control"
              value={title}
              onTextChange={this.handleTitleChange}
              onKeyPress={this.handleTitleKeypress}
              onBlur={this.handleSubmit}
              autoFocus
            />
          </div>
          <div className="d-flex flex-row">
            <button type="submit" className="btn btn-success">
              Create Card
            </button>
            <button type="button" className="btn btn-link text-success">
              Cancel
            </button>
          </div>
        </form>
      );
    }

    return (
      <div className="kanban-column-header p-2">
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={this.openEditable}
        >
          <i className="icofont-plus" /> <span>Add a new Card</span>
        </button>
      </div>
    );
  }
}

export default FormAddCard;

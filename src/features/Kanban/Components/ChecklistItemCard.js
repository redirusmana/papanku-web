import React from "react";
import TextareaAutosize from "../../../provider/Commons/TextareaAutosize";

const DEFAULT_PLACEHOLDER = "Add checklist item...";

class ChecklistItemCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      value: ""
    };
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, false);
  }

  onTextChange = e => {
    const { value } = e.target;
    this.setState({
      value
    });
  };

  onTextKeyPress = e => {
    const enterWillSubmit = true;
    if (e.key === "Enter" && enterWillSubmit) {
      e.preventDefault();
      this.handleSubmit();
    }
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.handleSubmit();
  };

  handleClickOutside = e => {
    if (!this.formDOM) {
      return;
    }

    if (this.formDOM.contains(e.target)) {
      return;
    }

    this.toggleEditable();
  };

  toggleEditable = () => {
    const { editable, value } = this.state;
    const { initialValue } = this.props;

    if (!editable) {
      document.addEventListener("click", this.handleClickOutside, false);
    } else {
      document.removeEventListener("click", this.handleClickOutside, false);
    }

    this.setState({
      editable: !editable,
      value: !editable ? initialValue : value
    });
  };

  handleSubmit = () => {
    const { value } = this.state;

    if (value) {
      this.resetValue();
    }
  };

  resetValue = () => {
    const { initialValue } = this.props;
    this.setState({
      value: initialValue
    });
  };

  render() {
    const { editable, value } = this.state;

    const editedComponent = editable ? (
      <form
        onSubmit={this.onFormSubmit}
        className="w-100"
        ref={wrapperSubtask => {
          this.formDOM = wrapperSubtask;
        }}
      >
        <TextareaAutosize
          value={value}
          inputClassName="form-control"
          onTextChange={this.onTextChange}
          onKeyPress={this.onTextKeyPress}
          autoFocus={editable}
          placeholder={DEFAULT_PLACEHOLDER}
        />
        <button type="submit" className="btn btn-sm btn-primary mt-2">
          Add
        </button>
      </form>
    ) : (
      <button
        type="button"
        className="btn btn-link pl-0 text-left btn-block"
        onClick={this.toggleEditable}
      >
        {DEFAULT_PLACEHOLDER}
      </button>
    );

    return (
      <div className="subtask-item">
        <label className="custom-control custom-checkbox mb-0" htmlFor="a">
          &nbsp;
        </label>
        {editedComponent}
      </div>
    );
  }
}

export default ChecklistItemCard;

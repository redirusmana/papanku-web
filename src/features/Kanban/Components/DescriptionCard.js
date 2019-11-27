import React from "react";
// import PropTypes from "prop-types";
import TextareaAutosize from "../../../provider/Commons/TextareaAutosize";

const initialFormState = {
  description: "This is Description"
};

class DescriptionCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      form: initialFormState
    };
  }

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleClickOutside, false);
  };

  onTaskDescriptionChange = e => {
    const { value } = e.target;
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        description: value
      }
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.submitDescription();
    this.resetForm();
    this.toggleEdit();
  };

  toggleEdit = () => {
    const { editable, form } = this.state;

    if (!editable) {
      document.addEventListener("click", this.handleClickOutside, false);
    } else {
      document.removeEventListener("click", this.handleClickOutside, false);
    }

    this.setState({
      editable: !editable,
      form: {
        ...form,
        description: !editable ? form : ""
      }
    });
  };

  handleClickOutside = e => {
    if (!this.formDOM) {
      return;
    }

    if (this.formDOM.contains(e.target)) {
      return;
    }

    this.submitDescription();
    this.toggleEdit();
  };

  submitDescription = () => {
    // const { form } = this.state;
  };

  resetForm = () => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        ...initialFormState
      }
    });
  };

  renderDescription = () => {
    const { editable, form } = this.state;

    const placeholder = "Add description to this task...";

    if (editable) {
      return (
        <React.Fragment>
          <TextareaAutosize
            value={form.initialFormState}
            inputClassName="border-0"
            autoFocus={editable}
            onTextChange={this.onTaskDescriptionChange}
            placeholder={placeholder}
            style={{
              minHeight: 75
            }}
          />
          <div className="my-2">
            <button type="submit" className="btn btn-success btn-sm">
              {/* <i className="icofont-check" /> */}
              Save
            </button>
            {/* <button
              type="submit"
              className="btn btn-link text-success btn-sm mx-2"
            >
              
            </button> */}
          </div>
        </React.Fragment>
      );
    }

    if (!form.initialFormState) {
      return (
        <div
          role="button"
          tabIndex={0}
          className="d-block text-body mb-0"
          onFocus={this.toggleEdit}
        >
          {placeholder}
        </div>
      );
    }

    return (
      <div
        role="button"
        tabIndex={0}
        className="d-block text-body mb-0"
        onFocus={this.toggleEdit}
      >
        {form.initialFormState.split("\n").map((item, key) => (
          <React.Fragment key={key}>
            {item}
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  };

  render() {
    const { form } = this.state;

    return (
      <section className="task-detail-group">
        <i className="icofont-info" />
        <div>
          <div className="task-detail-subtitle">
            <span>Description</span>
            {form.initialFormState && (
              <div className="task-detail-options">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={this.toggleEdit}
                >
                  <i className="icofont-pencil icon-left" />
                  Edit Description
                </button>
              </div>
            )}
          </div>
          <form
            className="task-detail-desc"
            onSubmit={this.onFormSubmit}
            ref={form => {
              this.formDOM = form;
            }}
          >
            {this.renderDescription()}
          </form>
        </div>
      </section>
    );
  }
}

export default DescriptionCard;

import React from "react";
import api from "../../../provider/Tools/api";
import {
  axiosError,
  AXIOS_CANCEL_MESSAGE
} from "../../../provider/Tools/converter";
import TextareaAutosize from "../../../provider/Commons/TextareaAutosize";

const initialFormState = {
  title: ""
};

class FormAddListTask extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "Title",
      form: initialFormState,
      formVisible: false
    };
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, false);
  }

  onToggleCreate = () => {
    const { formVisible } = this.state;

    if (!formVisible) {
      document.addEventListener("click", this.handleClickOutside, false);
    } else {
      document.removeEventListener("click", this.handleClickOutside, false);
    }

    this.setState({
      formVisible: !formVisible
    });
  };

  onTaskTitleKeyPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.submitTask();
      this.resetForm();
    }
  };

  onTaskTitleChange = ({ target }) => {
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        title: target.value
      }
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.submitTask();
    this.resetForm();
  };

  onCancelForm = () => {
    this.resetForm();
    this.onToggleCreate();
  };

  async submitTask() {
    const { listSource } = this.props;
    const { title } = this.state;
    try {
      this._requestSource = api.generateCancelToken();
      const url = `/api/list/${listSource.id}/card`;
      const { data } = await api.post(url, { title });

      if (data.success === "OK") {
      }
    } catch (e) {
      const error = axiosError(e);
      if (error === AXIOS_CANCEL_MESSAGE) {
        return;
      }
    }
  }

  resetForm = () => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        ...initialFormState
      }
    });
  };

  handleClickOutside = e => {
    if (this.formDOM.contains(e.target)) {
      return;
    }

    this.submitTask();
    this.resetForm();
    this.onToggleCreate();
  };

  render() {
    // console.log(this.props);
    const { form, formVisible } = this.state;

    if (!formVisible) {
      return (
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.onToggleCreate}
        >
          <i className="la la-plus icon-left" />
          Add New Task
        </button>
      );
    }

    return (
      <form
        onSubmit={this.onFormSubmit}
        ref={c => {
          this.formDOM = c;
        }}
      >
        <div className="kanban-cell mt-0">
          <TextareaAutosize
            value={form.title}
            inputClassName="border-0 outline-none"
            placeholder="Enter a title for this task"
            autoFocus={formVisible}
            onTextChange={this.onTaskTitleChange}
            onKeyPress={this.onTaskTitleKeyPress}
            readOnly={false}
          />
        </div>
        <div className="d-flex flex-row flex-nowrap align-items-center">
          <div className="flex-grow-1 flex-shrink-1">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={false}
            >
              {false ? (
                <React.Fragment>
                  {/* plus */}
                  <i className="icofont-clock-time animate-spin" /> Saving
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <i className="icofont-save" /> Submit Task
                </React.Fragment>
              )}
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-link"
              onClick={this.onCancelForm}
            >
              <i className="icofont-close text-danger" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormAddListTask;

import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import * as yup from "yup";
import cn from "classnames";
import { apiCreateBoard } from "../action"; //apiAddFriend,
import api from "../../../provider/Tools/api";
import "../Style/style.css";
import {
  axiosError,
  AXIOS_CANCEL_MESSAGE
} from "../../../provider/Tools/converter";
import alertFloat from "../../../provider/Display/alertFloat";

const formCreateBoardValidation = yup.object().shape({
  title: yup.string().required("Title is required")
});

class FormCreateBoard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        title: ""
      }
    };
  }

  handleSubmit = async (values, actions) => {
    try {
      this.props.handleLoading(true);
      this._requestSource = api.generateCancelToken();

      const response = await apiCreateBoard(values, this._requestSource.token);
      const { data } = response;

      if (response.status === 200) {
        alertFloat({
          type: "success",
          content: data.message
        });
        this.props.handleReplace(data.data);
      }
    } catch (e) {
      const error = axiosError(e);
      if (error === AXIOS_CANCEL_MESSAGE) {
        return;
      }
      alertFloat({
        type: "error",
        content: error
      });
    }
    actions.setSubmitting(false);
    this.props.handleLoading(false);
    this.props.handleClose();
  };
  render() {
    const { initialValues } = this.state;
    return (
      <React.Fragment>
        <Formik
          initialValues={initialValues}
          validationSchema={formCreateBoardValidation}
          onSubmit={this.handleSubmit}
          render={({
            handleChange,
            handleBlur,
            values,
            handleSubmit,
            isSubmitting
          }) => (
            <div className="row">
              <div className="col-lg-24">
                <form className="form-horizontal p-2" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="">
                      Title Board
                    </label>
                    <input
                      type="text"
                      className={"form-control"}
                      placeholder="Title Board"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      values={values.title}
                    />
                  </div>
                  <div className="form-group ">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block font-weight-bold"
                      disabled={isSubmitting}
                    >
                      <i
                        className={cn({
                          la: true,
                          "la-save": !isSubmitting,
                          "la-circle-o-notch animate-spin": isSubmitting
                        })}
                      />{" "}
                      {isSubmitting ? "Submitting" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
});

export default connect(mapStateToProps)(FormCreateBoard);

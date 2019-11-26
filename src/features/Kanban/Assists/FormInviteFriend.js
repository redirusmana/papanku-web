import React from "react";
import "../Style/style.css";
import InputSelectLong from "../../../provider/Commons/InputSelectLong";
import { Formik } from "formik";

class FormInviteFriend extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* List Board */}
        <Formik
          // validationSchema={}
          onSubmit={this.handleSubmit}
          render={({
            setFieldValue
            // handleChange,
            // handleBlur
            // setValues,
            // handleSubmit,
            // values
            // errors,
            // isSubmitting
          }) => (
            <form className="form-horizontal ">
              <div className="form-group">
                <label className="form-label" htmlFor="">
                  Username
                </label>
                <InputSelectLong
                  className="form-control"
                  mode="multiple"
                  name="username"
                  onChange={value => setFieldValue("sort", value)}
                  options={[
                    { label: "Friend", value: "Friend" },
                    { label: "Friend", value: "Friend" }
                  ]}
                  placeholder="username / id"
                  // value={}
                />
              </div>
              <div className="form-group mb-0">
                <button
                  type="submit"
                  className="btn btn-success btn-block font-weight-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        />
      </React.Fragment>
    );
  }
}

export default FormInviteFriend;

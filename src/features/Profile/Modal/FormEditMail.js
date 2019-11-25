import React from "react";
import "../Style/style.css";
import { Formik } from "formik";

class FormEditMail extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* List Board */}
        <Formik
          // validationSchema={}
          onSubmit={this.handleSubmit}
          render={({
            // setFieldValue,
            handleChange,
            handleBlur
            // setValues,
            // handleSubmit,
            // values
            // errors,
            // isSubmitting
          }) => (
            <div className="row">
              <div className="col-lg-24">
                <form className="form-horizontal p-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="">
                      Email
                    </label>
                    <input
                      type="email"
                      className={"form-control"}
                      placeholder="Email"
                      name={""}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
              </div>
            </div>
          )}
        />
      </React.Fragment>
    );
  }
}

export default FormEditMail;

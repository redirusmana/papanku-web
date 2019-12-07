import React from "react";
import InputNumber from "../../../provider/Commons/InputNumber";
import { Formik } from "formik";
import "../Style/style.css";

class FormEditMail extends React.PureComponent {
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
            <div className="row">
              <div className="col-lg-24">
                <form className="form-horizontal p-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="">
                      Phone Number
                    </label>
                    <InputNumber
                      placeholder="Phone Number"
                      name={""}
                      onChange={value => setFieldValue("phone_number", value)}
                    />
                  </div>
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block font-weight-bold"
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

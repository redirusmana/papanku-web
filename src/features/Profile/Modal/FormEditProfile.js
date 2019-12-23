import React from "react";
import { Formik } from "formik";
import InputDate from "../../../provider/Commons/InputDate";
import InputSelectLong from "../../../provider/Commons/InputSelectLong";
import InputImage from "../../../provider/Commons/InputImage";
// import { OptActiveStatus } from "../../../provider/Tools/config";
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
            setFieldValue,
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
                      Profile Photo
                    </label>
                    <InputImage
                      name="profile_photo"
                      placeholder="Choose a file image to upload"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="">
                      Name
                    </label>
                    <input
                      type="text"
                      className={"form-control"}
                      placeholder="Name"
                      name={""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="">
                      Username
                    </label>
                    <input
                      type="text"
                      className={"form-control"}
                      placeholder="Username"
                      name={""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="">
                      Gender
                    </label>
                    <InputSelectLong
                      className="form-control"
                      name="status_type"
                      onChange={value => setFieldValue("Status", value)}
                      options={[
                        { label: "Laki Laki", value: "L" },
                        { label: "Perempuan", value: "P" }
                      ]}
                      placeholder="Status"
                      // value={}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="">
                      Birth of Date
                    </label>
                    <InputDate
                      name="target_date"
                      handleChange={value =>
                        setFieldValue("target_date", value)
                      }
                      // value={}
                      isBlockAfterToday={false}
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

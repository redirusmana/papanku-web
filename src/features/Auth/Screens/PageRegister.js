import React from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import cn from "classnames";
import api from "../../../provider/Tools/api";
import { apiSignInAction } from "../action";
import alertFloat from "../../../provider/Display/alertFloat";
import {
  axiosError,
  AXIOS_CANCEL_MESSAGE
} from "../../../provider/Tools/converter";
import logoLanding from "../../../assets/images/logo-landing.jpeg";
import logoTitle from "../../../assets/images/logo-title.png";
import "../Style/style.css";

const formRegisterValidation = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  username: yup
    .string()
    .required("Username is required")
    // .matches(/^[a-zA-Z0-9]*$/, "Must alphanumeric value")
    // .lowercase("Username should be lowercase")
    // .trim()
    ,
  email: yup
    .string()
    .email("Current value is not an email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password too short"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Password is not same")
    .required("Password confirmation is required")
});

class PageRegister extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        first_name: undefined,
        last_name: undefined,
        email: undefined,
        username: undefined,
        password: undefined,
        password_confirmation: undefined
      }
    };
  }

  handleSubmit = async (values, actions) => {
    const  {password_confirmation, ...newValues } = values;
    try {
      this._requestSource = api.generateCancelToken();

      const response = await apiSignInAction(newValues, this._requestSource.token);
      if (response.status === 200) {
        alertFloat({
          type: "success",
          content: response.message
        });
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
      actions.setSubmitting(false);
    }
  };

  render() {
    const { initialValues } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row p-5">
            {/* Image  */}
            <div className="col-lg-11">
              <div>
                <img
                  className="m-auto"
                  src={logoLanding}
                  width="500"
                  height="500"
                  alt=""
                />
              </div>
            </div>
            {/* Image  */}

            {/* Form  */}
            <div className="col-lg-9 m-auto">
              <div className="">
                {" "}
                <div className="text-center">
                  <img
                    className="mx-auto text-center"
                    src={logoTitle}
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={formRegisterValidation}
                  onSubmit={this.handleSubmit}
                  render={({
                    handleChange,
                    isSubmitting,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors
                    // setFieldValue,
                    // setValues,
                  }) => (
                    <form
                      className="form-horizontal p-4"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-lg-24">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="label_name"
                                >
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  className={"form-control"}
                                  placeholder="First Name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="first_name"
                                  values={values.first_name}
                                />
                                {errors && errors.first_name && (
                                  <p className="text-danger">
                                    {errors.first_name}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="label_name"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  className={"form-control"}
                                  placeholder="Last Name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="last_name"
                                  values={values.last_name}
                                />
                                {errors && errors.last_name && (
                                  <p className="text-danger">
                                    {errors.last_name}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="label_name">
                              Email
                            </label>
                            <input
                              type="text"
                              className={"form-control"}
                              placeholder="Email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="email"
                              values={values.email}
                            />
                            {errors && errors.email && (
                              <p className="text-danger">{errors.email}</p>
                            )}
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="label_name">
                              Username
                            </label>
                            <input
                              type="text"
                              className={"form-control"}
                              placeholder="Username"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="username"
                              values={values.username}
                            />
                            {errors && errors.username && (
                              <p className="text-danger">{errors.username}</p>
                            )}
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="label_name">
                              Password
                            </label>
                            <input
                              type="password"
                              className={"form-control"}
                              placeholder="Password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="password"
                              values={values.password}
                            />
                            {errors && errors.password && (
                              <p className="text-danger">{errors.password}</p>
                            )}
                          </div>

                          <div className="form-group">
                            <label className="form-label" htmlFor="label_name">
                              Re-type Password
                            </label>
                            <input
                              type="password"
                              className={"form-control"}
                              placeholder="Re-type Password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="password_confirmation"
                              values={values.password_confirmation}
                            />
                            {errors && errors.password_confirmation && (
                              <p className="text-danger">
                                {errors.password_confirmation}
                              </p>
                            )}
                          </div>

                          <div className="form-group ">
                            <button
                              type="submit"
                              className="btn btn-block btn-primary"
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

                          <div className="form-footer d-flex flex-row flex-nowrap justify-content-center align-items-center mt-2">
                            <Link
                              to="/login"
                              className="btn btn-link text-primary font-weight-bold"
                            >
                              Do you have Account? / Login
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
            {/* Form  */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageRegister;

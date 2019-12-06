import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/bootstrap.png";
import "../Style/style.css";

class PageLogin extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row p-5">
            {/* Image  */}
            <div className="col-lg-14">
              <div>
                <img
                  className="m-auto"
                  src={logo}
                  width="500"
                  height="500"
                  alt=""
                />
              </div>
            </div>
            {/* Image  */}

            {/* Form  */}
            <div className="col-lg-10 m-auto">
              <div className="">
                {" "}
                <div className="text-center">
                  <img
                    className="mx-auto text-center"
                    src={logo}
                    width="100"
                    height="100"
                    alt=""
                  />
                </div>
                <form className="form-horizontal p-4" autoComplete="form-login">
                  {/* {message && (
                    <div className="mb-2">
                      <Alert type="error" message={`Whoops. ${message}`} showIcon />
                    </div>
                  )} */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-label" htmlFor="register-name">
                          First Name
                        </label>
                        <input
                          type="text"
                          className={"form-control"}
                          id="register-name"
                          aria-describedby="firstnameHelp"
                          placeholder="First Name"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          name="firstName"
                          autoComplete="firstName"
                        />
                        {/* <TextValidation isTouched={touched.firstName} errors={errors.firstName} /> */}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-label" htmlFor="register-name">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className={"form-control"}
                          id="register-name"
                          aria-describedby="lastnameHelp"
                          placeholder="Last Name"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          name="lastName"
                          autoComplete="lastName"
                        />
                        {/* <TextValidation isTouched={touched.lastName} errors={errors.lastName} /> */}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="register-username">
                      Username
                    </label>
                    <input
                      type="text"
                      className={"form-control"}
                      id="register-username"
                      aria-describedby="usernamelHelp"
                      placeholder="Username"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      name="username"
                      autoComplete="username"
                    />
                    {/* <TextValidation isTouched={touched.username} errors={errors.username} /> */}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="register-email">
                      Email
                    </label>
                    <input
                      type="text"
                      className={"form-control"}
                      id="register-email"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      name="email"
                      autoComplete="email"
                    />
                    {/* <TextValidation isTouched={touched.email} errors={errors.email} /> */}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="registes-password">
                      Password
                    </label>
                    <input
                      type="password"
                      className={"form-control"}
                      id="registes-password"
                      placeholder="Password"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      name="password1"
                      autoComplete="password1"
                    />
                    {/* <TextValidation isTouched={touched.password1} errors={errors.password1} /> */}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="registes-password">
                      Password
                    </label>
                    <input
                      type="password"
                      className={"form-control"}
                      id="registes-password"
                      placeholder="Re-type Password"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      name="password2"
                      autoComplete="password2"
                    />
                    {/* <TextValidation isTouched={touched.password2} errors={errors.password2} /> */}
                  </div>
                  <div className="form-group mb-0">
                    <Link
                      to="/user"
                      className="btn btn-success btn-block font-weight-bold"
                    >
                      Register
                    </Link>
                    {/* <button
                      type="submit"
                      className="btn btn-success btn-block font-weight-bold"
                      disabled={submitting}
                    >
                      {submitting && <i className="la la-circle-o-notch animate-spin mr-2" />}
                      Register <i className="icofont-sign-in"></i>
                    </button> */}
                  </div>
                  <div className="form-footer d-flex flex-row flex-nowrap justify-content-center align-items-center mt-2">
                    <Link
                      to="/login"
                      className="btn btn-link text-success font-weight-bold"
                    >
                      Do you have Account? / Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            {/* Form  */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageLogin;

import React from 'react';
import logo from '../../../assets/images/bootstrap.png';
import '../Style/style.css';

class PageLogin extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row p-5">
            {/* image  */}
            <div className="col-lg-14">
              <div>
                <img className="m-auto" src={logo} width="500" height="500" alt="" />
              </div>
            </div>
            {/* image  */}

            {/* Form  */}
            <div className="col-lg-10 m-auto">
              <div className="">
                <div className="text-center">
                  <img className="mx-auto text-center" src={logo} width="100" height="100" alt="" />
                </div>
                <form className="form-horizontal p-4" autoComplete="form-login">
                  {/* {message && (
                    <div className="mb-2">
                      <Alert type="error" message={`Whoops. ${message}`} showIcon />
                    </div>
                  )} */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="login-email">
                      Username
                    </label>
                    <input
                      type="text"
                      className={'form-control'}
                      id="login-username"
                      aria-describedby="usernameHelp"
                      placeholder="Username"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      name="username"
                      autoComplete="username"
                    />
                    {/* <TextValidation isTouched={touched.username} errors={errors.username} /> */}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="login-password">
                      Password
                    </label>
                    <input
                      type="password"
                      className={'form-control'}
                      id="login-password"
                      placeholder="Password"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      name="password"
                      autoComplete="password"
                    />
                    {/* <TextValidation isTouched={touched.password} errors={errors.password} /> */}
                  </div>
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="btn btn-success btn-block font-weight-bold"
                      // disabled={submitting}
                    >
                      {/* {submitting && <i className="la la-circle-o-notch animate-spin mr-2" />} */}
                      Login <i className="icofont-login"></i>
                    </button>
                  </div>
                  <div className="form-footer d-flex flex-row flex-nowrap justify-content-between align-items-center mt-4">
                    <label className="custom-control custom-checkbox mb-0" htmlFor="login-remember">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="login-remember"
                        name="rememberMe"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                      />
                      <span className="custom-control-label">Remember me</span>
                    </label>
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

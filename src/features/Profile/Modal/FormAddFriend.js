import React from "react";
import { Formik } from "formik";
import cn from "classnames";
import {apiFoundFriend} from '../action'; //apiAddFriend,
import Avatar from "../../../provider/Display/Avatar";
import api from "../../../provider/Tools/api";
import "../Style/style.css";
import {
  axiosError,
  AXIOS_CANCEL_MESSAGE
} from "../../../provider/Tools/converter";
import alertFloat from "../../../provider/Display/alertFloat";
// import { assetsApiUrl } from "../../../provider/Tools/general";

class FormAddFriend extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      found: false,
      initialValues: {
        targetEmail:''
      }
    };
  }
  
  onAddFriend = async () =>{
    
  };

  onCancelAdd =  () =>{
    this.setState({
      found:false
    })
  };
  
  handleSubmit = async (values, actions) => {
    const { dataSources } = this.props; 
    const ROUTE_API = `api/${dataSources.email}/add/friend`
    try {
      this._requestSource = api.generateCancelToken();

      const response = await apiFoundFriend(ROUTE_API, values, this._requestSource.token);
      const { data } = response;

      if (response.status === 200) {
        alertFloat({
          type: "success",
          content: data.success
        });
        this.setState({
          found:true
        })
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
    const {initialValues,found} = this.state;
    return (
      <React.Fragment>
        {/* List Board */}
        {found ? 
        (
          <React.Fragment>
              <div className="text-center">
                <Avatar
                  name="Muhammad Seftikara Al"
                  // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
                  size="xxxl"
                  avatarClass="avatar-link mb-1"
                />
                <h4 className="card-title text-center pt-2">
                  Muhammad Seftikara Al
                </h4>
                <button
                  type="button"
                  onClick={() => this.onCancelAdd()}
                  className="btn rounded-pill btn-primary mr-1"
                >
                  cancel
                </button>
                <button
                  type="button"
                  onClick={() => this.onAddFriend()}
                  className="btn rounded-pill btn-primary ml-1"
                ><i className="font-weight-normal icofont-plus" />
                  Add Friend
                </button>
              </div>
          </React.Fragment>
        ) : (
          <Formik
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
          render={({
            handleChange,
            handleBlur,
            values,
            handleSubmit,
            isSubmitting
            // setFieldValue,
            // setValues,
            // errors,
          }) => (
            <div className="row">
              <div className="col-lg-24">
                <form className="form-horizontal p-2" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="">
                      Email
                    </label>
                    <input
                      type="text"
                      className={"form-control"}
                      placeholder="Email"
                      name="targetEmail"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      values={values.targetEmail}
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
        )}
      </React.Fragment>
    );
  }
}

export default FormAddFriend;

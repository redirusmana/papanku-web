import React from "react";
import { Formik } from "formik";
import cn from "classnames";
import api from "../../../provider/Tools/api";
import Avatar from "../../../provider/Display/Avatar";
import "../Style/style.css";
import {
  axiosError,
  AXIOS_CANCEL_MESSAGE
} from "../../../provider/Tools/converter";
import InputSelectLong from "../../../provider/Commons/InputSelectLong";
import alertFloat from "../../../provider/Display/alertFloat";
import LoadingCard from "../../../provider/Display/LoadingCard";
import { apiInvitetoBoard } from "../action";
// import { assetsApiUrl } from "../../../provider/Tools/general";

class FormInviteFriend extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        members: undefined
      },
      inviteOption: undefined,
      loading: false
    };
  }

  componentDidMount() {
    this.getListFriend();
  }

  getListFriend = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        const ROUTE_API = `api/friend`;
        this._requestSource = api.generateCancelToken();
        api
          .get(ROUTE_API, this._requestSource.token)
          .then(response => {
            const { data } = response;
            this.setState({
              inviteOption: data,
              loading: false
            });
          })
          .catch(error => console.log(error));
      }
    );
  };

  handleSubmit = async (values, actions) => {
    const { idBoard } = this.props;
    try {
      this._requestSource = api.generateCancelToken();
      const response = await apiInvitetoBoard(
        values,
        idBoard,
        this._requestSource.token
      );
      const { data } = response;

      if (response.status === 200) {
        alertFloat({
          type: "success",
          content: data.message
        });
        this.setState({
          initialValues: {
            members: undefined
          }
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
    }
    actions.setSubmitting(false);
    // this.props.handleClose();
  };

  render() {
    const { inviteOption, initialValues, loading } = this.state;
    if (loading) {
      return <LoadingCard />;
    }

    return (
      <React.Fragment>
        {/* List Board */}
        <Formik
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
          render={({
            values,
            handleSubmit,
            isSubmitting,
            setFieldValue
            // handleChange,
            // handleBlur,
            // setValues,
            // errors,
          }) => (
            <div className="row">
              <div className="col-lg-24">
                <form className="form-horizontal p-2" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="">
                      Invite Friend to Board
                    </label>
                    <InputSelectLong
                      className="form-control"
                      name="members"
                      mode="multiple"
                      onChange={value => setFieldValue("members", value)}
                      options={inviteOption || undefined}
                      placeholder="Friend"
                      value={values.members}
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

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex flex-column flex-nowrap">
                <div className="my-2">
                  <div className="media">
                    <Avatar
                      size="md"
                      name="redi r"
                      title="redi r"
                      style={{ margin: ".3rem" }}
                    />
                    <div
                      className="media-body pl-1 align-self-center"
                      style={{ fontSize: "16px" }}
                    >
                      <div className="activity-item-header">
                        <div>
                          <small>
                            <b className="font-weight-bold">Redi</b>
                          </small>
                        </div>
                        <div className="1">
                          <small>
                            <b className="font-weight-bold">Rusmana</b>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="d-flex flex-column flex-nowrap">
                <div className="my-2">
                  <div className="media">
                    <Avatar
                      size="md"
                      name="redi r"
                      title="redi r"
                      style={{ margin: ".3rem" }}
                    />
                    <div
                      className="media-body pl-1 align-self-center"
                      style={{ fontSize: "16px" }}
                    >
                      <div className="activity-item-header">
                        <div>
                          <small>
                            <b className="font-weight-bold">Redi</b>
                          </small>
                        </div>
                        <div className="1">
                          <small>
                            <b className="font-weight-bold">Rusmana</b>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormInviteFriend;

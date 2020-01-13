import React from "react";
import get from "lodash/get";
import Popover from "antd/lib/popover";
import "antd/lib/popover/style/index.css";
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
// import LoadingCard from "../../../provider/Display/LoadingCard";
import { apiInvitetoBoard } from "../action";
import { assetsApiUrl } from "../../../provider/Tools/general";

class MembersCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        members: undefined
      },
      inviteOption: undefined,
      boardMember: undefined,
      pendingMember: undefined,
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
        const { idBoard } = this.props;
        const ROUTE_API = `api/friend/board/${idBoard}`;
        this._requestSource = api.generateCancelToken();
        api
          .get(ROUTE_API, this._requestSource.token)
          .then(response => {
            const { data } = response;
            this.setState({
              inviteOption: data.friends,
              boardMember: data.members,
              pendingMember: data.pending_member,
              loading: false
            });
          })
          .catch(error => console.log(error));
      }
    );
  };

  renderMembers() {
    const { dataSource } = this.props;
    return (
      <div className="avatar-list">
        {Array.isArray(get(dataSource, "members")) &&
        get(dataSource, "members").length > 0 ? (
          get(dataSource, "members").map(result => (
            <React.Fragment>
              <Avatar
                name={result.name}
                title={result.name}
                image={
                  result.avatar_path
                    ? assetsApiUrl(result.avatar_path)
                    : undefined
                }
                size="md"
              />
            </React.Fragment>
          ))
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </div>
    );
  }

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
  };

  render() {
    const {
      inviteOption,
      boardMember,
      pendingMember,
      initialValues,
      loading
    } = this.state;
    const popoverContent = (
      <div>
        <div style={{ minWidth: 250 }}>
          <div className="mb-2 text-center font-weight-bold">List Members</div>
          <Formik
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
            render={({ values, handleSubmit, isSubmitting, setFieldValue }) => (
              <div className="row">
                <div className="col-lg-24">
                  <form className="form-horizontal p-2" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="">
                        Invite Friend to Card
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
        </div>
      </div>
    );

    return (
      <React.Fragment>
        {this.renderMembers()}
        <div>
          <Popover
            trigger="click"
            content={popoverContent}
            placement="top"
            overlayClassName="popover-noarrow"
          >
            <button type="button" className="btn btn-link text-primary">
              <i className="icofont-plus icon-left" /> Add Member
            </button>
          </Popover>
        </div>
      </React.Fragment>
    );
  }
}

export default MembersCard;

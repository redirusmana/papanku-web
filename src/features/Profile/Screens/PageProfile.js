import React from "react";
import { connect } from "react-redux";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import Avatar from "../../../provider/Display/Avatar";
import ListFriends from "../Components/ListFriends";
import ListFriendsRequest from "../Components/ListFriendsRequest";
import FormEditMail from "../Modal/FormEditMail";
import FormEditPassword from "../Modal/FormEditPassword";
import FormEditPhone from "../Modal/FormEditPhone";
import FormEditProfile from "../Modal/FormEditProfile";
import Modal from "../../../provider/Display/Modal";
import ListBoards from "../Components/ListBoards";
import ListActivity from "../Components/ListActivity";
import { assetsApiUrl } from "../../../provider/Tools/general";
import {
  OptActiveStatus,
  OptActiveStatusClass
} from "../../../provider/Tools/config";
import "../Style/style.css";
import { AUTH_SET_LOGOUT, removeToken } from "../../Auth/action";
import api from "../../../provider/Tools/api";

class PageProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editAble: "",
      isVisible: false
    };
  }
  handleModal = editAble => {
    this.setState({
      isVisible: true,
      editAble
    });
  };

  handleClose = () => {
    this.setState({
      isVisible: false
    });
  };

  handleLogout = () => {
    api.unsetToken();
    removeToken();
    this.props.setLogout();
  };

  render() {
    const { isVisible, editAble } = this.state;
    const { user } = this.props;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row p-3">
            {/* Profile Personal Info */}
            <div className="col-lg-6">
              <div className="card mb-3">
                <div className="card-header mx-auto my-2">
                  <Avatar
                    avatarClass="avatar-link avatar-huge "
                    image={
                      user.avatar_path
                        ? assetsApiUrl(user.avatar_path)
                        : undefined
                    }
                    size="md"
                    name={user.name || ""}
                    title={user.name || ""}
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-center">{user.name || " - "}</h3>
                  <hr />
                  <div className="d-flex my-2 flex-row font-weight-normal">
                    <div className="mr-auto" style={{ wordBreak: "break-all" }}>
                      Username
                    </div>
                    <div className="ml-2">{user.name || " - "}</div>
                  </div>
                  <div className="d-flex my-2 flex-row font-weight-normal">
                    <div className="mr-auto" style={{ wordBreak: "break-all" }}>
                      Gender
                    </div>
                    <div className="ml-2">{user.gender || " - "}</div>
                  </div>
                  <div className="d-flex my-2 flex-row font-weight-normal">
                    <div className="mr-auto" style={{ wordBreak: "break-all" }}>
                      Date of Birth
                    </div>
                    <div className="ml-2">{user.date_of_birth || " - "}</div>
                  </div>
                  <div className="d-flex my-2 flex-row font-weight-normal">
                    <div className="mr-auto" style={{ wordBreak: "break-all" }}>
                      Status
                    </div>
                    <div className="ml-2">
                      <span
                        className={`font-weight-normal ${
                          OptActiveStatusClass[user.status || "active"]
                        }`}
                      >
                        {user.status || " - "}
                      </span>
                    </div>
                  </div>
                  <p className="font-weight-normal">
                    <button
                      type="button"
                      className="btn btn-block btn-primary btn-sm"
                      onClick={() => this.handleModal("edit-profile")}
                    >
                      <i className="font-weight-normal icofont-gear" /> Edit
                    </button>
                  </p>
                </div>
              </div>

              <div className="card mb-3">
                {/* <div className="card-header">
                  <span className=" font-weight-bold">Personal Info</span>
                </div> */}
                <div className="card-body">
                  <div className="d-flex my-2 flex-row font-weight-normal">
                    <div className="mr-auto" style={{ wordBreak: "break-all" }}>
                      {user.email || " - "}
                    </div>
                    <div className="ml-2">
                      <button
                        onClick={() => this.handleModal("edit-mail")}
                        type="button"
                        className="btn btn-block btn-primary btn-sm "
                      >
                        <i className="icofont-pencil-alt-2" />
                      </button>
                    </div>
                  </div>

                  <div className="d-flex my-2 flex-row font-weight-normal">
                    <div className="mr-auto" style={{ wordBreak: "break-all" }}>
                      {user.phone_number || " - "}
                    </div>
                    <div className="ml-2">
                      <button
                        onClick={() => this.handleModal("edit-phone")}
                        type="button"
                        className="btn btn-block btn-primary btn-sm"
                      >
                        <i className="icofont-pencil-alt-2" />
                      </button>
                    </div>
                  </div>

                  <div className="d-flex my-2 flex-row font-weight-normal">
                    <div className="mr-auto" style={{ wordBreak: "break-all" }}>
                      ****************
                    </div>
                    <div className="ml-2">
                      <button
                        onClick={() => this.handleModal("edit-password")}
                        type="button"
                        className="btn btn-block btn-primary btn-sm"
                      >
                        <i className="icofont-pencil-alt-2" />
                      </button>
                    </div>
                  </div>
                  <p className="font-weight-normal">
                    <button
                      type="button"
                      onClick={() => this.handleLogout()}
                      className="btn btn-block btn-primary btn-sm" //danger
                    >
                      <i className="font-weight-normal icofont-exit" /> Logout
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <Modal
              title="Edit Profile"
              visible={isVisible}
              size="medium"
              handleBack={this.handleClose}
            >
              <div className="container">
                {editAble === "edit-profile" && <FormEditProfile />}
                {editAble === "edit-mail" && <FormEditMail />}
                {editAble === "edit-phone" && <FormEditPhone />}
                {editAble === "edit-password" && <FormEditPassword />}
              </div>
            </Modal>
            {/* Profile Personal Info */}
            <div className="col-lg-18">
              <div className="fb-profile-block-menu mb-3">
                <div className="row block-menu">
                  <div className="col-lg-6 px-0 navs">
                    <NavLink
                      className="text-primary h-100 d-block"
                      activeClassName="text-primary active"
                      to="/user"
                      exact
                    >
                      Board
                    </NavLink>
                  </div>
                  <div className="col-lg-6 px-0 navs">
                    <NavLink
                      className="text-primary h-100 d-block"
                      activeClassName="text-primary active"
                      to="/user/activity"
                      exact
                    >
                      Activity
                    </NavLink>
                  </div>
                  <div className="col-lg-6 px-0 navs ">
                    <NavLink
                      className="text-primary h-100 d-block"
                      activeClassName="text-primary active"
                      to="/user/friend"
                    >
                      Friend
                    </NavLink>
                  </div>
                  <div className="col-lg-6 px-0 navs ">
                    <NavLink
                      className="text-primary h-100 d-block"
                      activeClassName="text-primary active"
                      to="/user/request-friend"
                    >
                      Friend Request
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="row">
                <Switch>
                  <Route path="/user" exact component={ListBoards} />
                  <Route path="/user/activity" exact component={ListActivity} />
                  <Route path="/user/friend" component={ListFriends} />
                  <Route
                    path="/user/request-friend"
                    component={ListFriendsRequest}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
});

const mapDispatchToProps = dispatch => ({
  setLogout: () =>
    dispatch({
      type: AUTH_SET_LOGOUT
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(PageProfile);

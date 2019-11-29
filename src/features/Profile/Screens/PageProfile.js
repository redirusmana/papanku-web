import React from "react";
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
import "../Style/style.css";

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
  render() {
    const { isVisible, editAble } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row p-3">
            {/* Profile Personal Info */}
            <div className="col-lg-6">
              <div className="card mb-3">
                <div className="card-header mx-auto my-2">
                  <Avatar
                    name="sss sss"
                    avatarClass="avatar-link avatar-huge "
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-center">Marteen urseela</h3>
                  <hr />
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">id</span>
                    <span className="float-right">Marteen_urseela</span>
                  </p>
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">Jenis Kelamin</span>
                    <span className="float-right">Laki Laki</span>
                  </p>
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">Tanggal Lahir</span>
                    <span className="float-right">10/10/2010</span>
                  </p>
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">Status</span>
                    <span className="float-right">
                      <span className="font-weight-normal badge badge-success">
                        {/* primary */}
                        Active
                      </span>
                    </span>
                  </p>
                  <p className="font-weight-normal">
                    <button
                      type="button"
                      className="btn btn-block btn-success btn-sm"
                      onClick={() => this.handleModal("edit-profile")}
                    >
                      <i className="font-weight-normal icofont-gear" /> Edit
                    </button>
                  </p>
                </div>
              </div>

              <div className="card mb-3">
                {/* <div className="card-header clearfix">
                  <span className="float-left">Personal Info</span>
                </div> */}
                <div className="card-body">
                  <p className="clearfix font-weight-normal">
                    <span className="float-left text-break">
                      redirusmana30@gmail.com
                    </span>
                    <span className="float-right">
                      <button
                        onClick={() => this.handleModal("edit-mail")}
                        type="button"
                        className="btn btn-block btn-success btn-sm"
                      >
                        <i className="icofont-pencil-alt-2" />
                      </button>
                    </span>
                  </p>

                  <p className="clearfix font-weight-normal">
                    <span className="float-left">08917387386</span>
                    <span className="float-right">
                      <button
                        onClick={() => this.handleModal("edit-phone")}
                        type="button"
                        className="btn btn-block btn-success btn-sm"
                      >
                        <i className="icofont-pencil-alt-2" />
                      </button>
                    </span>
                  </p>

                  <p className="clearfix font-weight-normal">
                    <span className="float-left">***********</span>
                    <span className="float-right">
                      <button
                        onClick={() => this.handleModal("edit-password")}
                        type="button"
                        className="btn btn-block btn-success btn-sm"
                      >
                        <i className="icofont-pencil-alt-2" />
                      </button>
                    </span>
                  </p>

                  <p className="font-weight-normal">
                    <Link
                      to={"/login"}
                      className="btn btn-block btn-success btn-sm" //danger
                    >
                      <i className="font-weight-normal icofont-exit" /> Logout
                    </Link>
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
                      className="text-secondary h-100 d-block"
                      activeClassName="text-success active"
                      to="/user"
                      exact
                    >
                      Papan
                    </NavLink>
                  </div>
                  <div className="col-lg-6 px-0 navs">
                    <NavLink
                      className="text-secondary h-100 d-block"
                      activeClassName="text-success active"
                      to="/user/activity"
                      exact
                    >
                      Activity
                    </NavLink>
                  </div>
                  <div className="col-lg-6 px-0 navs ">
                    <NavLink
                      className="text-secondary h-100 d-block"
                      activeClassName="text-success active"
                      to="/user/friend"
                    >
                      Teman
                    </NavLink>
                  </div>
                  <div className="col-lg-6 px-0 navs ">
                    <NavLink
                      className="text-secondary h-100 d-block"
                      activeClassName="text-success active"
                      to="/user/request-friend"
                    >
                      Permintaan Pertemanan
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

export default PageProfile;

import React from "react";
import Avatar from "../../../provider/Display/Avatar";
// import ListFriends from "../Components/ListFriends";
// import ListFriendsRequest from "../Components/ListFriendsRequest";
// import ListSearch from "../Components/ListSearch";
// import ListCards from "../Components/ListCards";
import DeleteFile from "../Modal/DeleteFile";
import "../Style/style.css";

class PageLogin extends React.PureComponent {
  render() {
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
                        type="button"
                        className="btn btn-block btn-success btn-sm"
                      >
                        <i className="icofont-ui-edit" />
                      </button>
                    </span>
                  </p>

                  <p className="clearfix font-weight-normal">
                    <span className="float-left">08917387386</span>
                    <span className="float-right">
                      <button
                        type="button"
                        className="btn btn-block btn-success btn-sm"
                      >
                        <i className="icofont-ui-edit" />
                      </button>
                    </span>
                  </p>

                  <p className="clearfix font-weight-normal">
                    <span className="float-left">***********</span>
                    <span className="float-right">
                      <button
                        type="button"
                        className="btn btn-block btn-success btn-sm"
                      >
                        <i className="icofont-ui-edit" />
                      </button>
                    </span>
                  </p>

                  <p className="font-weight-normal">
                    <button
                      type="button"
                      className="btn btn-block btn-success btn-sm" //danger
                    >
                      <i className="font-weight-normal icofont-exit" /> Logout
                    </button>
                  </p>
                </div>
              </div>
            </div>
            {/* Profile Personal Info */}
            <div className="col-lg-18">
              <div className="fb-profile-block-menu mb-3">
                <div className="row block-menu">
                  <div className="col-lg-8 mx-0 navs">
                    <a className="text-secondary" href={{}}>
                      Papan
                    </a>
                  </div>
                  <div className="col-lg-8 mx-0 navs active">
                    <a className="text-success" href={{}}>
                      Permintaan Pertemanan
                    </a>
                  </div>
                  <div className="col-lg-8 mx-0 navs ">
                    <a className="text-secondary" href={{}}>
                      Teman
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <DeleteFile />
                {/* <ListCards /> */}
                {/* <ListSearch /> */}
                {/* <ListFriends /> */}
                {/* <ListFriendsRequest /> */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageLogin;

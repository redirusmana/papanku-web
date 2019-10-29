import React from 'react';
import logo from '../../../assets/images/bootstrap.png';
import profileBg from '../../../assets/images/profileBg.jpg';
import ListFriends from '../Components/ListFriends';
// import ListFriendsRequest from '../Components/ListFriendsRequest';
// import ListCards from '../Components/ListCards';
import ListSearch from '../Components/ListSearch';
import '../Style/style.css';

class PageLogin extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-24 m-0 p-0">
              <div className="fb-profile-block">
                <img
                  src={profileBg}
                  className="fb-profile-block-thumb cover-container img-fluid"
                  alt=""
                />
                <div className="profile-img">
                  <a href={{}}>
                    <img src={logo} alt="" title="" />
                  </a>
                </div>
                <div className="profile-name">
                  <h2>
                    Marteen Urseela <br />
                    (Shadowbringer)
                  </h2>
                </div>
                <div className="fb-profile-block-menu">
                  <div className="block-menu">
                    <ul>
                      <li>
                        <a href={{}}>Papan</a>
                      </li>
                      <li>
                        <a href={{}}>Teman</a>
                      </li>
                      <li>
                        <a href={{}}>Permintaan Pertemanan</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row p-3">
            <div className="col-lg-6">
              <div className="card mb-3">
                <div className="card-header clearfix">
                  <span className="float-left">Profile</span>
                  <span className="float-right">Edit Profile</span>
                </div>
                <div className="card-body">
                  <h3 className="text-center">Marteen urseela</h3>
                  <h5 className="text-center text-secondary">Marteen_urseela</h5>
                  <hr />
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">id</span>
                    <span className="float-right">Marteen_urseela</span>
                  </p>
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">Gender</span>
                    <span className="float-right">Laki Laki</span>
                  </p>
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">Tanggal Lahir</span>
                    <span className="float-right">10-10-2010</span>
                  </p>
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">Status</span>
                    <span className="float-right">
                      <span className="font-weight-normal badge badge-primary">Active</span>
                    </span>
                  </p>
                  {/* <p className="clearfix font-weight-normal">
                    <span className="float-left">Usia</span>
                    <span className="float-right">19</span>
                  </p> */}
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header clearfix">
                  <span className="float-left">Email Address</span>
                  <span className="float-right">Edit Email</span>
                </div>
                <div className="card-body">
                  <p className="clearfix font-weight-normal">
                    {/* <span className="float-left">redirusmana30@gmail.com (primary)</span> */}
                    <span className="float-left">redirusmana30@gmail.com</span>
                    {/* <span className="float-left">redirusmana30@gmail.com</span> */}
                  </p>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header clearfix">
                  <span className="float-left">Phone</span>
                  <span className="float-right">Edit Phone</span>
                </div>
                <div className="card-body">
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">Phone</span>
                    <span className="float-right">08917387386</span>
                  </p>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header clearfix">
                  <span className="float-left">Security</span>
                  <span className="float-right">Change Password</span>
                </div>
                <div className="card-body">
                  <p className="clearfix font-weight-normal">
                    <span className="float-left">Password</span>
                    <span className="float-right">************</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-18">
              <div className="row">
                <ListSearch />
                {/* <ListCards /> */}
                <ListFriends />
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

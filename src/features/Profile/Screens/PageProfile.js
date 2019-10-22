import React from 'react';
import logo from '../../../assets/images/bootstrap.png';
import profileBg from '../../../assets/images/profileBg.jpg';
// import ListFriends from '../Components/ListFriends';
// import ListCards from '../Components/ListCards';
import './style/style.css';

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
                  <h2>Marteen Urseela</h2>
                </div>
                <div className="fb-profile-block-menu">
                  <div className="block-menu">
                    <ul>
                      <li>
                        <a href={{}}>Boards</a>
                      </li>
                      <li>
                        <a href={{}}>Friends</a>
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
            <div className="col-lg-18">
              <div className="row">
                {/* <ListFriends /> */}
                {/* <ListCards /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">Activity</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">List Activity</li>
                  <li className="list-group-item">List Activity</li>
                  <li className="list-group-item">List Activity</li>
                  <li className="list-group-item">List Activity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageLogin;

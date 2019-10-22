import React from 'react';
import './style/style.css';
import logo from '../../../assets/images/bootstrap.png';

class ListFriends extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-8 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img src={logo} className="rounded-circle profile-picture-rad img-fluid" alt="" />
                <h5 className="card-title text-center">Martin</h5>
                <h6 className="card-title text-center text-secondary">Martin</h6>
                <button type="button" className="btn rounded-pill btn-primary">
                  Messages
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-8">v</div> */}
        {/* <div className="col-lg-8">v</div> */}
      </React.Fragment>
    );
  }
}

export default ListFriends;

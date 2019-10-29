import React from 'react';
import logo from '../../../assets/images/bootstrap.png';

class ListFriends extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-24 ">
          <div className="row mb-3">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      src={logo}
                      className="rounded-circle profile-picture-rad img-fluid"
                      alt=""
                    />
                    <h5 className="card-title text-center">Martin</h5>
                    <h6 className="card-title text-center text-secondary">Martin</h6>
                    <button type="button" className="btn rounded-pill btn-primary mr-1">
                      Accept
                    </button>
                    <button type="button" className="btn rounded-pill btn-danger ml-1">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row mb-3">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      src={logo}
                      className="rounded-circle profile-picture-rad img-fluid"
                      alt=""
                    />
                    <h5 className="card-title text-center">Martin</h5>
                    <h6 className="card-title text-center text-secondary">Martin</h6>
                    <button type="button" className="btn rounded-pill btn-warning mr-1">
                      Cancel Add Friend
                    </button>
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

export default ListFriends;

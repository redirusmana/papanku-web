import React from 'react';
import logo from '../../../assets/images/bootstrap.png';

class ListFriends extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* List Friend */}
        <div className="col-lg-8 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img src={logo} className="rounded-circle profile-picture-rad img-fluid" alt="" />
                <h5 className="card-title text-center">Martin</h5>
                <h6 className="card-title text-center text-secondary">Martin</h6>
                <button type="button" className="btn rounded-pill btn-primary mr-1">
                  <i className="font-weight-normal icofont-ui-message" />
                  {/* Message */}
                </button>
                <button type="button" className="btn rounded-pill btn-danger ml-1">
                  <i className="font-weight-normal icofont-bin" />
                  {/* Remove */}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add new Friend */}
        <div className="col-lg-8 mb-3">
          <div className="card p-5">
            <div className="card-body ">
              <div className="text-center">
                <i className="text-success icofont-people icofont-5x" />
              </div>
              <div className="text-center">
                <button type="button" className="btn rounded-pill btn-success ">
                  <i className="font-weight-normal icofont-plus" />
                  {/* Add new Friend */} Friend
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListFriends;

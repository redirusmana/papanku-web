import React from 'react';
import './style/style.css';
import logo from '../../../assets/images/bootstrap.png';

class ListCards extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-8 mb-3">
          {/* <div class="card">
            <img src={logo} class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card Name</h5>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div> */}
          <div class="card text-white">
            <img src={logo} class="card-img card-picture" alt="..." />
            <div class="card-img-overlay text-center">
              <div className="card-body m-5">
                <h3 class="card-title text-dark">Card title</h3>
                <a href={{}} class="btn btn-sm btn-light font-weight-bold">
                  Board
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListCards;

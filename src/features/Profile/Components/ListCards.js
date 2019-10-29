import React from 'react';
import '../Style/style.css';
import logo from '../../../assets/images/bootstrap.png';

class ListCards extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-8 mb-3">
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
        <div className="col-lg-8 mb-3">
          <div class="card text-white">
            <img src={logo} class="card-img card-picture" alt="..." />
            <div class="card-img-overlay text-center">
              <div className="card-body m-5">
                <h3 class="card-title text-dark">Add Board</h3>
                <a href={{}} class="btn btn-sm btn-light font-weight-bold">
                  Create
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

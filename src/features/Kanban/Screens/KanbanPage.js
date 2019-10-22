import React from 'react';
import logo from '../../../assets/images/bootstrap.png';
import './style/style.css';

class KanbanPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-sm navbar-light bg-green">
          {/*bg-transparent */}
          {/* <a class="navbar-brand" href={{}}>
            <img src={logo} width="20" height="20" alt="" />
          </a> */}
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item py-0 ">
                <a href={{}} className="btn btn-sm font-weight-bold btn-outline-light ">
                  BOARD
                </a>
              </li>
            </ul>
            <ul class="navbar-nav m-auto">
              <li class="nav-item py-0 ">
                <img src={logo} width="30" height="30" alt="" />
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item py-0 mx-1">
                <a href={{}} className="btn btn-sm font-weight-bold btn-outline-light ">
                  A
                </a>
              </li>
              <li class="nav-item py-0 mx-1">
                <a href={{}} className="btn btn-sm font-weight-bold btn-outline-light ">
                  B
                </a>
              </li>
              <li class="nav-item py-0 mx-1">
                <img src={logo} width="30" height="30" alt="" />
              </li>
            </ul>
          </div>
        </nav>
        <nav class="navbar navbar-expand-sm navbar-light bg-transparent">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item py-0 ">
                <p className=" font-weight-bold  ">
                  BOARD NAME | Board |
                  <img src={logo} width="15" height="15" alt="" />
                  <img src={logo} width="15" height="15" alt="" />
                  <img src={logo} width="15" height="15" alt="" />
                  <img src={logo} width="15" height="15" alt="" />
                </p>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <div class="scrolling-width d-flex justify-content-start">
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
            <img className="mx-1" src={logo} width="200" height="200" alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default KanbanPage;

import React from "react";
import logo from "../../../assets/images/bootstrap.png";
import CardList from "../Components/CardList";
import Avatar from "../../../provider/Display/Avatar";
import "../Style/style.css";
import "../../style/style.css";

class KanbanPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {/* Navbar 1 */}
        <nav className="navbar navbar-expand-sm navbar-light bg-dark-green">
          {/*bg-transparent */}
          {/* <a className="navbar-brand" href={{}}>
            <img src={logo} width="20" height="20" alt="" />
          </a> */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item py-0 ">
                <a
                  href={{}}
                  className="btn btn-sm font-weight-bold btn-outline-light"
                >
                  <i className="icofont-home" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav m-auto">
              <li className="nav-item py-0 ">
                <img src={logo} width="30" height="30" alt="" />
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item py-0 mr-1">
                <a
                  href={{}}
                  className="btn btn-sm font-weight-bold btn-outline-light "
                >
                  <i className="icofont-alarm" />
                </a>
              </li>
              <li className="nav-item py-0 mx-1">
                <Avatar
                  name="redi rsmn"
                  style={{
                    width: "2.0rem",
                    height: "2.0rem",
                    lineHeight: "2.0rem",
                    fontSize: "1rem"
                  }}
                />
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar 1 */}

        {/* Navbar 2 */}
        <nav className="navbar navbar-expand-sm navbar-light bg-green">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item py-0 font-weight-bold text-white">
                BOARD NAME | Board |
              </li>
              <li className="nav-item py-0 px-1 font-weight-bold text-white">
                <Avatar name="redirsmn" size="sm" />
                <Avatar name="sss" size="sm" />
                <Avatar name={2} size="sm" />
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar 2 */}

        <div className="container-fluid py-2">
          <div className="box-kanban pb-2">
            <CardList />
            {/* <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList />
            <CardList /> */}
          </div>
        </div>

        <div>
          <a href={{}} className="act-btn btn-success">
            +
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default KanbanPage;

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
        <nav className="navbar navbar-expand-sm navbar-light bg-green">
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
              <li className="nav-item py-0 ">
                <button type="button" className="btn btn-sm btn-outline-light">
                  BOARD
                </button>
              </li>
            </ul>
            <ul className="navbar-nav m-auto">
              <li className="nav-item py-0 ">
                <img src={logo} width="30" height="30" alt="" />
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item py-0">
                <a href={{}} className="btn btn-sm btn-outline-light">
                  <i className="icofont-alarm" />
                </a>
              </li>
              <li className="nav-item py-0">
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
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item py-0 font-weight-bold">BOARD NAME | </li>
              <li className="nav-item py-0 px-1 font-weight-bold text-white">
                <Avatar name="aku" size="sm" />
                <Avatar name="mereka" size="sm" />
                <Avatar name="kamu" size="sm" />
                <Avatar name="bukan" size="sm" />
                <Avatar name="dia" size="sm" />
                <Avatar name="hakim kita" size="sm" />
                <Avatar name={2} size="sm" />
              </li>
              <li className="nav-item py-0 font-weight-bold">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-success"
                >
                  Invite
                </button>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item py-0 font-weight-bold">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-success"
                >
                  All Activity
                </button>
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

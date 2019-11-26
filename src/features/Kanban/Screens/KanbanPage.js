import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/bootstrap.png";
import CardList from "../Components/CardList";
import ProfileMember from "../Assists/ProfileMember";
import FormInviteFriend from "../Assists/FormInviteFriend";
import ListMemberFriend from "../Assists/ListMemberFriend";
import BoardMenu from "../Assists/BoardMenu";
import ProfileMenu from "../Assists/ProfileMenu";
import AllActivity from "../Assists/AllActivity";
import AllNotification from "../Assists/AllNotification";
import Avatar from "../../../provider/Display/Avatar";
import Drawer from "antd/lib/drawer";
import Popover from "antd/lib/popover";
import "antd/lib/drawer/style/index.css";
import "antd/lib/popover/style/index.css";
import "../Style/style.css";
import "../../style/style.css";

class KanbanPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }
  handleModal = () => {
    this.setState({
      isVisible: true
    });
  };

  handleClose = () => {
    this.setState({
      isVisible: false
    });
  };
  render() {
    const { isVisible } = this.state;
    return (
      <React.Fragment>
        {/* Navbar 1 */}
        <nav className="navbar navbar-expand-sm navbar-light bg-green">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item py-0 ">
                <Link
                  to="/user"
                  className="btn btn-sm font-weight-bold btn-outline-light"
                >
                  <i className="icofont-home" />
                </Link>
              </li>
              <li className="nav-item py-0 ">
                <Popover
                  title="List Boards"
                  trigger="click"
                  content={<BoardMenu />}
                  overlayClassName="lg p-0"
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-light"
                  >
                    BOARD
                  </button>
                </Popover>
              </li>
            </ul>
            <ul className="navbar-nav m-auto">
              <li className="nav-item py-0 ">
                <img src={logo} width="30" height="30" alt="" />
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item py-0">
                <Popover
                  title="Notification"
                  trigger="click"
                  content={<AllNotification />}
                  overlayClassName="xl"
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-light"
                  >
                    <i className="icofont-alarm" />
                  </button>
                </Popover>
              </li>
              <li className="nav-item py-0">
                <Popover
                  title="Redi Rusmana"
                  trigger="click"
                  content={<ProfileMenu />}
                  overlayClassName="xl px-0"
                >
                  <Avatar
                    name="redi rsmn"
                    style={{
                      width: "2.0rem",
                      height: "2.0rem",
                      lineHeight: "2.0rem",
                      fontSize: "1rem"
                    }}
                  />
                </Popover>
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar 1 */}

        {/* Navbar 2 */}
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item py-0 font-weight-bold">BOARD NAME</li>
              <li className="nav-item py-0 font-weight-bold text-white">
                <div className="mr-1">
                  <Popover
                    title="Invite Friends"
                    trigger="click"
                    content={<ProfileMember />}
                    // content={<FormInviteFriend />}
                    placement="bottomLeft"
                    overlayClassName="xl"
                  >
                    <Avatar name="aku" size="sm" />
                    {/* <button
                    type="button"
                    className="btn btn-sm btn-outline-success"
                  >
                    Invite
                  </button> */}
                  </Popover>
                  <Avatar name="mereka" size="sm" />
                </div>

                <Popover
                  title="Members"
                  trigger="click"
                  content={<ListMemberFriend />}
                  placement="bottomLeft"
                  overlayClassName="lg"
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success mr-2"
                  >
                    Members
                  </button>
                </Popover>
                <Popover
                  title="Invite Friends"
                  trigger="click"
                  content={<FormInviteFriend />}
                  placement="bottomLeft"
                  overlayClassName="xl"
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success"
                  >
                    Invite
                  </button>
                </Popover>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item py-0 font-weight-bold">
                <button
                  type="button"
                  onClick={() => this.handleModal()}
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

        <Drawer
          title={"All Activity"}
          placement={"right"}
          onClose={this.handleClose}
          visible={isVisible}
          width={400}
          mask={false}
          maskClosable={false}
          closable
        >
          <AllActivity />
        </Drawer>
      </React.Fragment>
    );
  }
}

export default KanbanPage;

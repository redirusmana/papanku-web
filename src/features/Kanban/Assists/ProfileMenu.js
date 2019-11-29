import React from "react";
import { Link } from "react-router-dom";

class ProfileMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-column mx-0 py-1">
          <Link
            to={"/user"}
            className="p-2 text-dark pointer hovered-button-popover"
          >
            Board
          </Link>
          <Link
            to={"/user/activity"}
            className="p-2 text-dark pointer hovered-button-popover"
          >
            Activity
          </Link>
          <Link
            to={"/user/friend"}
            className="p-2 text-dark pointer hovered-button-popover"
          >
            Friends
          </Link>
          <div className="line-h-r" />
          <Link
            to={"/login"}
            className="p-2 text-dark pointer hovered-button-popover"
          >
            Log out
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileMenu;

import React from "react";

class ProfileMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-flex flex-column mx-0 py-1">
          <div className="p-2 btn-light pointer">Board</div>
          <div className="p-2 btn-light pointer">Activity</div>
          <div className="p-2 btn-light pointer">Friends</div>
          <div className="p-2 btn-light pointer">Log out</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileMenu;

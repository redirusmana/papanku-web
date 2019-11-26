import React from "react";
import "../Style/style.css";
import Avatar from "../../../provider/Display/Avatar";

class ListMemberFriend extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* List Board */}
        <div className="d-flex flex-wrap">
          <div className="slice">
            <Avatar name="aku" size="sm" />
          </div>
          <div className="slice">
            <Avatar name="baku" size="sm" />
          </div>
          <div className="slice">
            <Avatar name="caku" size="sm" />
          </div>
          <div className="slice">
            <Avatar name="daku" size="sm" />
          </div>
          <div className="slice">
            <Avatar name="eaku" size="sm" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListMemberFriend;

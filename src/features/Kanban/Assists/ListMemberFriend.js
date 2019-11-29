import React from "react";
import "../Style/style.css";
import Avatar from "../../../provider/Display/Avatar";
import ProfileMember from "../Assists/ProfileMember";
import Popover from "antd/lib/popover";
import "antd/lib/popover/style/index.css";

class ListMemberFriend extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* List Board */}
        <div className="d-flex flex-wrap">
          <div className="slice">
            <Popover
              title="Invite Friends"
              trigger="click"
              content={<ProfileMember />}
              // content={<FormInviteFriend />}
              placement="bottomLeft"
              overlayClassName="xl popover-no-padding"
            >
              <div>
                <Avatar name="aku" size="sm" />
              </div>
            </Popover>
          </div>
          {/* <div className="slice">
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
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default ListMemberFriend;

import React from "react";
import Popover from "antd/lib/popover";
import "antd/lib/popover/style/index.css";
// import get from "lodash/get";
// import uniqBy from "lodash/uniqBy";
import Avatar from "../../../provider/Display/Avatar";
// import { assetsApiUrl } from "../../../provider/Tools/general";

class MembersCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchMember: ""
    };
  }

  onSearchChange(e) {
    const { value } = e.target;
    this.setState({
      searchMember: value
    });
  }

  renderMembers() {
    return (
      <div className="avatar-list">
        <Avatar name="eaku" 
        // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
        size="md" />
        <Avatar name="aku" 
        // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
        size="md" />
      </div>
    );
  }

  render() {
    const { searchMember } = this.state;
    const popoverContent = (
      <div>
        <div style={{ minWidth: 250 }}>
          <div className="mb-2 text-center font-weight-bold">List Members</div>
          <div className="mb-2">
            <input
              type="search"
              value={searchMember}
              onChange={this.onSearchChange}
              placeholder="Search member"
              className="form-control"
            />
          </div>
        </div>
      </div>
    );

    return (
      <React.Fragment>
        {this.renderMembers()}
        <div>
          <Popover
            trigger="click"
            content={popoverContent}
            placement="top"
            overlayClassName="popover-noarrow"
          >
            <button type="button" className="btn btn-link text-primary">
              <i className="icofont-plus icon-left" /> Add Member
            </button>
          </Popover>
        </div>
      </React.Fragment>
    );
  }
}

export default MembersCard;

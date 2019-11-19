import React from "react";
import Avatar from "../../../provider/Display/Avatar";
import "../Style/style.css";

class CardPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="row  p-2">
          {/* List / Add Member */}
          <div className="col-lg-20">
            <Avatar name="wr" size="md" />
            <Avatar name="wr" size="md" />
            <Avatar name="wr" size="md" />
          </div>
          <div className="col-lg-4 text-right">
            <a href={{}} className="btn btn-link ">
              <i className="icofont-plus"></i> Add Member
            </a>
          </div>
          {/* List / Add Member */}
        </div>
      </React.Fragment>
    );
  }
}

export default CardPage;

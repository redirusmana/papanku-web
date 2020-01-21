import React from "react";
import { connect } from "react-redux";
import PageProfileInfo from "./PageProfileInfo";
import PageProfile from "./PageProfile";
import "../Style/style.css";

class PageProfileIndex extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row p-3">
            <div className="col-lg-6">
              <PageProfileInfo />
            </div>
            <div className="col-lg-18">
              <PageProfile />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  user: store.auth.user
});

export default connect(mapStateToProps)(PageProfileIndex);

import React from "react";
import "../Style/style.css";

class CardPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="row  p-2">
          {/* Attach File */}
          <div className="col-lg-1">
            <i className=" icofont-ui-file icofont-1x m-3"></i>
          </div>
          <div className="col-lg-20">
            <h3 className="font-weight-bold">Attachment</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardPage;

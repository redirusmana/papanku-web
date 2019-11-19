import React from "react";
import "../Style/style.css";

class CardPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="row  p-2">
          <div className="col-lg-1">
            <i className="font-weight-normal icofont-info icofont-1x m-3"></i>
          </div>
          <div className="col-lg-22">
            <h3 className="font-weight-bold">Description</h3>
            <div>
              <input
                type="text"
                className={"form-control"}
                placeholder="Tuliskan Deskripsinya boy ..."
              />
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardPage;

import React from "react";
import "../Style/style.css";

class TitleCard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* Header Card Info */}
        <div className="row  p-2">
          <div className="col-lg-1">
            <i className="font-weight-bold icofont-paperclip icofont-1x m-3"></i>
          </div>
          <div className="col-lg-21">
            <h4 className="font-weight-bold">Name Task</h4>
            <p>
              Card telah dibuat oleh
              <b className="font-weight-normal text-success">Martiin Urseela</b>
              , 14 Agustus 2018
            </p>
          </div>
          <div className="col-lg-2">
            <a href={{}} className="btn btn-sm btn-danger m-3">
              <i className="icofont-bin"></i>
            </a>
          </div>
        </div>
        {/* Header Card Info */}
      </React.Fragment>
    );
  }
}

export default TitleCard;

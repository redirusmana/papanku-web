import React from "react";
import Avatar from "../../../provider/Display/Avatar";
import "../Style/style.css";
import "../../style/style.css";

class CardList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      btnDropright: false
    };
  }
  render() {
    return (
      <div className="box-cards py-2 ">
        <div style={{ width: 300 }}>
          {/* width 300  */}
          {/* Card  */}
          {/* <div className="box-cards py-2 "> */}
          {/* Card */}
          <div className="box-cards-child-title ">
            <div className="mx-2">
              <span className="text-left">Name Cardnya (1)</span>
            </div>
          </div>
          {/* Card */}
          {/* {Status, Proprity} */}
          <div className="box-cards-child-body mx-auto">
            {/* Result Maps */}
            <div className="box-cards-child mx-auto my-2">
              {/* Status & Due Date */}
              <div className="font-weight-normal px-2">
                <span className="badge badge-primary">Primary</span>
                <span className="badge badge-danger mx-1">danger</span>
              </div>
              {/* Status & Due Date */}
              {/* Title */}
              {/* size-6 */}
              <div className=" px-2 py-1">
                <span>Name Child CardName Child </span>
              </div>
              {/* Title */}
              {/* Checklist / Attachment / Member */}
              <div className="px-2">
                <div class="d-flex bd-highlight ">
                  <div class=" bd-highlight pr-2">
                    <i className="font-weight-normal icofont-checked" /> 2
                  </div>
                  <div class=" bd-highlight">
                    <i className="font-weight-normal icofont-ui-file" /> 2
                  </div>
                  <div class="ml-auto bd-highlight pb-1">
                    <Avatar name="redirsmn" size="sm" />
                    <Avatar name="sss" size="sm" />
                    <Avatar name={3} size="sm" />
                  </div>
                </div>
              </div>
              {/* Checklist / Attachment / Member */}
            </div>

            {/* Result Maps */}
          </div>
          {/* {Status, Proprity} */}
          {/* Add New Card */}
          <div className="box-cards-child-footer">
            <div className="px-3 py-2">
              <button
                type="button"
                className="font-weight-bold btn btn-sm btn-success btn-block "
              >
                Add new list card{" "}
                <i className="font-weight-normal icofont-plus" />
              </button>
            </div>
          </div>
          {/* Add New Card */}
          {/* Card  */}
          {/* </React.Fragment> */}
        </div>
      </div>
    );
  }
}

export default CardList;

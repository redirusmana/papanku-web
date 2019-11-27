import React from "react";
import Avatar from "../../../provider/Display/Avatar";
import "../Style/style.css";
import "../../style/style.css";
import Modal from "../../../provider/Display/Modal";
import CardPage from "./CardPage";

class CardList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  handleModal = () => {
    this.setState({
      isVisible: true
    });
  };

  handleClose = () => {
    this.setState({
      isVisible: false
    });
  };
  render() {
    const { isVisible } = this.state;
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
                <div className="d-flex bd-highlight ">
                  <div className=" bd-highlight pr-2">
                    <i className="font-weight-normal icofont-checked" /> 2
                  </div>
                  <div className=" bd-highlight">
                    <i className="font-weight-normal icofont-ui-file" /> 2
                  </div>
                  <div className="ml-auto bd-highlight pb-1">
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
                onClick={() => this.handleModal()}
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

        <Modal visible={isVisible} size="large" handleBack={this.handleClose}>
          <CardPage />
        </Modal>
      </div>
    );
  }
}

export default CardList;

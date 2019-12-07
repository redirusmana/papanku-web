import React from "react";
import ChecklistCard from "./ChecklistCard";
import DescriptionCard from "./DescriptionCard";
import FileCard from "./FileCard";
import CommentCard from "./CommentCard";
import ActivityCard from "./ActivityCard";
import MemberCard from "./MemberCard";
import StatusCard from "./StatusCard";
import PriorityCard from "./PriorityCard";
import DeadlineCard from "./DeadlineCard";
import TitleCard from "./TitleCard";
import popConfirm from "../../../provider/Display/popConfirm";
// import Modal from "../../../provider/Display/Modal";
import "../Style/style.css";

class CardPage extends React.PureComponent {
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

  onAccept = () => {};
  onDecline = () => {
    popConfirm({
      title: `Are you sure to remove this Card?`,
      message: "Name Card will deleted permanently",
      okText: " Yes",
      okType: "danger",
      cancelText: " No"
    });
  };
  onCancelAdd = () => {};

  render() {
    return (
      <React.Fragment>
        {/* <Modal
          title="Editable"
          visible={this.state.isVisible}
          size="large"
          handleBack={this.handleClose}
        > */}
        <div className="task-detail">
          <div className="task-detail-main">
            <div className="task-detail-header">
              <section className="task-detail-group">
                <i
                  className="icofont-paperclip "
                  style={{ fontSize: "1.2rem" }}
                />
                <div className="flex-fill">
                  <TitleCard />
                  <div className="task-detail-meta">
                    <span>
                      In <strong className="text-primary">"Name Task"</strong>{" "}
                      Created by{" "}
                    </span>
                    <strong className="text-primary">Redi Rusmanda</strong>, 28
                    Novemba 2019
                  </div>
                  <div className="task-detail-tags">
                    <StatusCard />
                    <PriorityCard />
                    <DeadlineCard />
                  </div>
                </div>
                <div style={{ flex: 0 }}>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.onDecline()}
                  >
                    <i className="icofont-bin " /> Remove
                  </button>
                </div>
              </section>
            </div>
            <div className="task-detail-body">
              <DescriptionCard />
              <ChecklistCard />
              <FileCard />
            </div>
            <div className="task-detail-footer">
              <MemberCard />
            </div>
          </div>
          <div className="task-detail-aside">
            <ActivityCard />
            <CommentCard />
          </div>
        </div>
        {/* </Modal> */}
      </React.Fragment>
    );
  }
}

export default CardPage;

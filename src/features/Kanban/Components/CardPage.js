import React from "react";
// import logo from "../../../assets/images/bootstrap.png";
// import ChecklistCard from "./ChecklistCard";
import DescriptionCard from "./DescriptionCard";
// import FileCard from "./FileCard";
// import HistoryCard from './HistoryCard';
import MemberCard from "./MemberCard";
import StatusCard from "./StatusCard";
import PriorityCard from "./PriorityCard";
import DeadlineCard from "./DeadlineCard";
import TitleCard from "./TitleCard";
// import Modal from "./../../../provider/Display/Modal";
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
                      Pada{" "}
                      <strong className="text-success">"Nama Tugas"</strong>{" "}
                      Created by{" "}
                    </span>
                    <strong className="text-success">Redi Rusmanda</strong>, 28
                    Novemba 2019
                  </div>
                  <div className="task-detail-tags">
                    <StatusCard />
                    <PriorityCard />
                    <DeadlineCard />
                  </div>
                </div>
                <div style={{ flex: 0 }}>
                  <button type="button" className="btn btn-success btn-sm">
                    <i className="icofont-bin " /> Remove
                  </button>
                </div>
              </section>
            </div>
            <div className="task-detail-body">
              <DescriptionCard />
              {/* <ChecklistCard /> */}
              {/* <FileCard /> */}
            </div>
            <div className="task-detail-footer">
              <MemberCard />
            </div>
          </div>
          {/* <div className="task-detail-aside">
            <TaskDetailActivity detail={task} steps={steps} detailId={task.id} renderChange={ActivityTaskChange} />
            <TaskDetailComment detail={task} addComment={this.addComment} />
          </div> */}
        </div>
        {/* </Modal> */}
      </React.Fragment>
    );
  }
}

export default CardPage;

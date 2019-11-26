import React from "react";
// import logo from "../../../assets/images/bootstrap.png";
import ChecklistCard from "./ChecklistCard";
import DescriptionCard from "./DescriptionCard";
import FileCard from "./FileCard";
// import HistoryCard from './HistoryCard';
import MemberCard from "./MemberCard";
import StatusCard from "./StatusCard";
import TitleCard from "./TitleCard";
import Modal from "./../../../provider/Display/Modal";
import "../Style/style.css";

class CardPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
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
        <Modal
          title="Editable"
          visible={this.state.isVisible}
          size="large"
          handleBack={this.handleClose}
        >
          <div className="container ">
            <div className="task-detail">
              <div className="task-detail-main">
                <div className="task-detail-header">
                  <section className="task-detail-group">
                    <i className="la la-clipboard" />
                    <div className="flex-fill">
                      Title
                      <div className="task-detail-meta">
                        <TitleCard />
                      </div>
                      <div className="task-detail-tags">
                        <StatusCard />
                      </div>
                    </div>
                    <div style={{ flex: 0 }}>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={this.removeTask}
                      >
                        <i className="la la-trash" /> Remove
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
              {/* <div className="task-detail-aside">
            <TaskDetailActivity detail={task} steps={steps} detailId={task.id} renderChange={ActivityTaskChange} />
            <TaskDetailComment detail={task} addComment={this.addComment} />
          </div> */}
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CardPage;

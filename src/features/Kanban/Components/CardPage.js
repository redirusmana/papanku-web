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
            {/* Header Card Info */}
            <TitleCard />
            {/* Header Card Info */}

            {/* {Deadline, Priority, Status} = Card */}
            <StatusCard />
            {/* {Deadline, Priority, Status} = Card */}
            <hr />
            <div className="container-fluid p-0">
              {/* Scrolinng list Content Card */}
              <div className="body-kanban-scroll">
                {/* Deskripsi */}
                <DescriptionCard />
                {/* Deskripsi */}

                {/* List Checklist List Task */}
                <ChecklistCard />
                {/* List Checklist List Tasl */}

                {/* Attach File */}
                <FileCard />
                {/* Attach File */}
              </div>
              {/* Scrolinng list Content Card */}
            </div>

            <hr />

            {/* List / Add Member */}
            <MemberCard />
            {/* List / Add Member */}
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CardPage;

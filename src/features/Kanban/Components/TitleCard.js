import React from "react";
import "../Style/style.css";
import EditingTask from "../Assists/EditingTask";

class TitleCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { title: "Title" };
  }

  onTaskTitleChange = value => {
    this.setState({
      title: value
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div className="task-detail-title">
        <EditingTask
          initialValue={title}
          submitChanges={this.onTaskTitleChange}
        />
      </div>
    );
  }
}

export default TitleCard;

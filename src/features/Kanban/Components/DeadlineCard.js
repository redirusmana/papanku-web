import React from "react";
import PropTypes from "prop-types";
// import get from "lodash/get";
import moment from "moment";
import "moment/locale/id";
import InputDate from "../../../provider/Commons/InputDate";

moment.locale("id");

class DeadlineCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // onTaskDeadlineChange = value => {
  //   this.setState({})
  // };

  render() {
    return (
      <div className="task-detail-tag">
        <p className="mb-0">Due Date</p>
        <div className="d-flex flex-row align-items-center">
          <span className="badge badge-light">
            <InputDate
              name="task-detail-deadline"
              // onChange={this.onTaskDeadlineChange}
              format="DD MMMM YYYY"
              wrapClassName="task-input-date cursor-pointer"
              placeholder="Deadline for this task"
              isBlockAfterToday={false}
            />
          </span>
        </div>
      </div>
    );
  }
}

DeadlineCard.propTypes = {
  detail: PropTypes.shape({}),
  dataIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  updateTask: PropTypes.func
};

DeadlineCard.defaultProps = {
  detail: {},
  dataIndex: "targetDate",
  updateTask: () => {}
};

export default DeadlineCard;

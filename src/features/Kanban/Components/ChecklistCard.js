import React from "react";
import "../Style/style.css";
import ChecklistGroupCard from "./ChecklistGroupCard";

class ChecklistCard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <section className="task-detail-group">
          <i className="icofont-checked" />
          <div>
            <div className="task-detail-subtitle">
              <span>Checklist</span>
              <div className="task-detail-options">
                <ChecklistGroupCard />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ChecklistCard;

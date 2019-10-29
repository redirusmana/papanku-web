import React from 'react';
import '../Style/style.css';

class ListSearch extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-18 mb-3 ">
          <input type="text" className="form-control" name="search" placeholder="Search.."></input>
        </div>
        <div className="col-lg-6 mb-3">
          <input type="text" className="form-control" name="Sort" placeholder="Sort"></input>
        </div>
      </React.Fragment>
    );
  }
}

export default ListSearch;

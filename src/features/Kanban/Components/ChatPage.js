import React from 'react';
// import logo from '../../../assets/images/bootstrap.png';
// import Avatar from '../../../provider/Display/Avatar';
import '../Style/style.css';

class ChatPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header ">
                  <h5 className="p-2">List Activity / Comment</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatPage;

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
                  <h5 className="">List Activity / Comment</h5>
                </div>
                <div className="card box-chats bg-secondary">
                  <div className="container p-1">
                    <div className="message-body">
                      <div className=" message-main-receiver">
                        <div className="receiver">
                          <div className="message-text">Hi, what are you doing?!</div>
                          <span className="message-time pull-right">Sun, 17:01</span>
                        </div>
                      </div>
                    </div>

                    <div className=" message-body">
                      <div className=" message-main-sender">
                        <div className="sender">
                          <div className="message-text">I am doing nothing man!</div>
                          <span className="message-time pull-right">Sun, 17:02</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer "> </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatPage;

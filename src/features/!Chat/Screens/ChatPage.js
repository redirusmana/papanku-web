import React from "react";
import logo from "../../../assets/images/bootstrap.png";
// import Avatar from '../../../provider/Display/Avatar';
import "../Style/style.css";

class ChatPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            {/* SideBar - left - List Chat  */}
            <div className="col-lg-8 p-0">
              <div className="card">
                {/* Our Profile Info */}
                <div className="card-header rounded-0">
                  <span className="float-left">
                    <img
                      src={logo}
                      className="rounded-circle profile-picture-rad img-fluid"
                      alt=""
                    />
                  </span>
                  <span className="float-right">
                    <div>
                      <i className="icofont-gears icofont-2x " />
                    </div>
                  </span>
                </div>
                {/* Our Profile Info */}

                {/* Search Chat */}
                <div className="card-header rounded-0">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="search"
                    placeholder="Search..."
                  />
                </div>
                {/* Search Chat */}
              </div>
              <div className="card box-chats">
                {/* List Chat */}
                <div className="card-body text-secondary border-bottom">
                  <span className="float-left">
                    <img
                      src={logo}
                      className="rounded-circle profile-picture-chat img-fluid"
                      alt=""
                    />
                  </span>
                  <span className="float-left ml-2">
                    REDI RUSMANA
                    <br />
                    sss
                  </span>
                  <span className="float-right mt-4 mr-2">17:00</span>
                </div>
                {/* List Chat */}
              </div>
            </div>
            {/* SideBar - left - List Chat  */}

            {/* SideBar - right - List Message  */}
            <div className="col-lg-16 p-0">
              {/* Profile Friend Chats */}
              <div className="card">
                <div className="card-header ">
                  <span className="float-left">
                    <img
                      src={logo}
                      className="rounded-circle profile-picture-rad img-fluid"
                      alt=""
                    />
                  </span>
                  <span className="float-left ml-2 mt-1">REDI RUSMANA</span>
                  <span className="float-right">
                    <i className="icofont-gears icofont-2x " />
                  </span>
                </div>
              </div>
              {/* Profile Friend Chats */}

              {/* List Message */}
              <div className="card box-chats bg-secondary">
                <div className="container p-1">
                  {/* Receive Message */}
                  <div className="message-body">
                    <div className=" message-main-receiver">
                      <div className="receiver">
                        <div className="message-text">
                          Hi, what are you doing?!
                        </div>
                        <span className="message-time pull-right">
                          Sun, 17:01
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Receive Message */}
                  {/* Send Message */}
                  <div className=" message-body">
                    <div className=" message-main-sender">
                      <div className="sender">
                        <div className="message-text">
                          I am doing nothing man!
                        </div>
                        <span className="message-time pull-right">
                          Sun, 17:02
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Send Message */}
                </div>
              </div>
              {/* List Message */}

              {/* Form Send Message */}
              <div className="card">
                <div className="card-header rounded-0 ">
                  <div class="d-flex justify-content-between">
                    {/* Emoticon */}
                    <div className="m-auto">
                      <i className="icofont-ello icofont-2x text-secondary" />
                    </div>
                    {/* Emoticon */}
                    {/* Type Message */}
                    <input
                      type="text"
                      className="form-control rounded-pill mx-3"
                      name="search"
                      placeholder="Search..."
                    />
                    {/* Type Message */}
                    {/* Sent Button */}
                    <div className="m-auto">
                      <i className="icofont-telegram icofont-2x text-secondary" />
                    </div>
                    {/* Sent Button */}
                  </div>
                </div>
              </div>
              {/* Form Send Message */}
            </div>
            {/* SideBar - right - List Message  */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatPage;

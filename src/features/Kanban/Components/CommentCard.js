import React from "react";
import Avatar from "../../../provider/Display/Avatar";
import TextareaAutosize from "../../../provider/Commons/TextareaAutosize";
// import { assetsApiUrl } from "../../../provider/Tools/general";

class CommentCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      enterSend: true
    };
  }

  onContentChange = content => {
    this.setState({
      content
    });
  };

  onContentPress = e => {
    const { enterSend } = this.state;
    if (enterSend && e.key === "Enter") {
      e.preventDefault();
      this.submitComment();
    }
  };

  onCheckSend = enterSend => {
    this.setState({
      enterSend
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.submitComment();
  };

  submitComment = async () => {
    const { content } = this.state;

    await this.props.submitComment({
      content
    });

    this.setState({
      content: ""
    });
  };

  render() {
    const { content, enterSend } = this.state;
    return (
      <div className="task-detail-aside-footer">
        <div className="media media-comment media-comment-input">
          <Avatar size="md" name={"redi"} 
          // image={user.avatar_path ? assetsApiUrl(user.avatar_path) : undefined}
          title={"redi"} />
          <form className="media-body" onSubmit={e => this.onSubmit(e)}>
            <TextareaAutosize
              name="body"
              inputClassName="form-control pt-2 form-control"
              placeholder="Type your comment"
              value={content}
              onTextChange={e => this.onContentChange(e.target.value)}
              onKeyPress={this.onContentPress}
            />
            <div className="form-inline justify-content-between pt-1 pb-1 px-1 bg-white">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input form-control-sm"
                  id="comment-send-enter"
                  checked={enterSend}
                  onChange={({ target }) => this.onCheckSend(target.checked)}
                />
                <label
                  htmlFor="comment-send-enter"
                  className="custom-control-label"
                >
                  <small>Send when enter</small>
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-sm">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentCard;

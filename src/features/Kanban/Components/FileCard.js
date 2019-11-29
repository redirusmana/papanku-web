import React from "react";
import Upload from "antd/lib/upload";
import "antd/lib/upload/style/index.css";

const { Dragger } = Upload;

class FileCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  renderAttachments() {
    return <em>No attachment found</em>;
  }

  render() {
    const { temporaryAttachments } = this.state;
    return (
      <section className="task-detail-group">
        <i className="icofont-papers" />
        <div className="task-detail-subheader">
          <div className="task-detail-subtitle">
            <span>Attachments</span>
          </div>
          <div style={{ height: 150, marginBottom: "1rem" }}>
            <Dragger
              className="upload-drag"
              beforeUpload={() => false}
              showUploadList={false}
              fileList={temporaryAttachments}
              onChange={this.handleFileChange}
              multiple
            >
              <div className="d-block">
                <div className="mb-0" style={{ fontSize: 48 }}>
                  <i className="icofont-cloud-upload" />
                </div>
                Upload an attachment
              </div>
            </Dragger>
          </div>
        </div>
      </section>
    );
  }
}

export default FileCard;

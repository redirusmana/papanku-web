import React from "react";
// import PropTypes from 'prop-types';
// import debounce from 'lodash/debounce';
// import FileSaver from 'file-saver';
import get from "lodash/get";
import Upload from "antd/lib/upload";
import "antd/lib/upload/style/index.css";
import FileIcon from "../../../provider/Display/FileIcon";
import { numberToFileSize } from "../../../provider/Tools/converter";
import api from "../../../provider/Tools/api";
import {
  axiosError,
  AXIOS_CANCEL_MESSAGE
} from "../../../provider/Tools/converter";
// import popConfirm from '../../../provider/Display/popConfirm;
// import { downloadDSFile } from '../../DecisionSupport/action';

const { Dragger } = Upload;

class FileCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { temporaryAttachments: [] };
  }

  // downloadFile = async file => {
  //   try {
  //     if (file.file_id && file.attachment.name) {
  //       this._requestSource = api.generateCancelToken();
  //       const response = await downloadDSFile(file.file_id, this._requestSource.token);
  //       FileSaver.saveAs(response.data, file.attachment.name);
  //     } else if (get(file, 'actualFile.name') && get(file, 'actualFile.originFileObj')) {
  //       FileSaver.saveAs(get(file, 'actualFile.originFileObj'), get(file, 'actualFile.name'));
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // removeFile = attachment => {
  //   const fileName = get(attachment, 'attachment.name') || get(attachment, 'name');
  //   popConfirm({
  //     title: `Are you sure to remove attachment ${fileName}?`,
  //     message: 'The action is permanent, there is no way to get it back',
  //     okText: 'Yes',
  //     cancelText: ' No',
  //     onOkay: () => {
  //       const { detail, attachmentAttr } = this.props;
  //       const attachments = get(detail, attachmentAttr);
  //       this.props.updateTask(attachments.filter(attach => attach.id !== attachment.id), {
  //         type: 'remove',
  //         files: [attachment]
  //       });
  //     },
  //     onCancel: () => {},
  //     okType: 'danger'
  //   });
  // };

  handleFileChange = ({ fileList }) => {
    const { temporaryAttachments } = this.state;
    // console.log(fileList);
    const mappedFileList = fileList.map(file => ({
      id: get(file, "id") || get(file, "uid"),
      name: file.name,
      size: file.size,
      actualFile: file
    }));

    this.setState(
      {
        temporaryAttachments: [...temporaryAttachments, ...mappedFileList]
      },
      () => {
        this.uploadFile();
      }
    );
  };

  uploadFile = async () => {
    const { temporaryAttachments } = this.state;
    const { cardId } = this.props;
    // this.props.updateTask([...attachments, ...temporaryAttachments], {
    //   type: 'add',
    //   files: temporaryAttachments.map(item => item.actualFile.originFileObj)
    // });

    const formData = new FormData();

    temporaryAttachments.forEach((attachment, i) => {
      formData.append(`attachments[${i}]`, attachment.actualFile.originFileObj);
    });

    try {
      this._requestSource = api.generateCancelToken();
      const url = `/api/card/${cardId}`;
      const response = await api.post(url, formData, null, {
        contentType: "multipart/form-data"
      });

      const { data } = response;

      // this.props.handleChangeAttachments(data.data.attachments)
      // this.props.handleChangeDatasource(data.data)
      this.setState({
        temporaryAttachments: []
      });
      if (response.status === 200) {
      }
    } catch (e) {
      const error = axiosError(e);
      if (error === AXIOS_CANCEL_MESSAGE) {
        return;
      }
    }

    // this.setState({
    //   temporaryAttachments: []
    // });
  };

  renderAttachments() {
    const { attachments, cardId } = this.props;

    if (Array.isArray(attachments) && attachments.length > 0) {
      return attachments.map(attach => {
        const fileSize = get(attach, "size");
        // const fileName = get(attach, "name") || get(attach, "name");
        const fileName = "Name File";
        const fileId = get(attach, "id");
        console.log(attach);
        return (
          <div
            className="task-detail-attachment"
            key={`attachment-${cardId}-${fileId}`}
          >
            <div className="attachment-icon">
              <FileIcon fileName={fileName} size="md" />
            </div>
            <div className="attachment-detail">
              <div>{fileName}</div>
              <span>{numberToFileSize(fileSize)}</span>
            </div>
            <div className="attachment-action">
              <button
                type="button"
                className="btn btn-primary btn-sm mr-1"
                title="Download File"
                onClick={() => this.downloadFile(attach)}
              >
                <i className="la la-download" />
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                title="Remove File"
                onClick={() => this.removeFile(attach)}
              >
                <i className="la la-trash" />
              </button>
            </div>
          </div>
        );
      });
    }

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
          {this.renderAttachments()}
        </div>
      </section>
    );
  }
}

export default FileCard;

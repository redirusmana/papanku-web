import React from "react";
import get from "lodash/get";
import ChecklistCard from "./ChecklistCard";
import DescriptionCard from "./DescriptionCard";
import FileCard from "./FileCard";
import CommentCard from "./CommentCard";
import ActivityCard from "./ActivityCard";
import MemberCard from "./MemberCard";
import StatusCard from "./StatusCard";
import PriorityCard from "./PriorityCard";
import DeadlineCard from "./DeadlineCard";
import TitleCard from "./TitleCard";
import Modal from "../../../provider/Display/Modal";
import api from "../../../provider/Tools/api";
import { apiDeleteCard } from "../action";
import {
  axiosError,
  AXIOS_CANCEL_MESSAGE
} from "../../../provider/Tools/converter";
import alertFloat from "../../../provider/Display/alertFloat";
import popConfirm from "../../../provider/Display/popConfirm";
import LoadingCard from "../../../provider/Display/LoadingCard";
import "../Style/style.css";

class CardPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: false, dataSources: {} };
  }

  onTaskClosed = () => {
    const { history, match } = this.props;
    this.props.getBoardInfo();
    history.replace(`/board/${match.params.id}`);
  };

  componentDidMount() {
    this.getCardInfo();
  }

  getCardInfo = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        const { match } = this.props;
        const ROUTE_API = `api/card/${match.params.cardId}`;
        this._requestSource = api.generateCancelToken();
        api
          .get(ROUTE_API, this._requestSource.token)
          .then(response => {
            const { data } = response;
            this.setState({
              dataSources: data,
              loading: false
            });
          })
          .catch(error => {
            console.log(error);
            const { history } = this.props;
            history.replace(`/board/${match.params.id}`);
            alertFloat({
              type: "error",
              content: "Card is not found"
            });
          });
      }
    );
  };

  handleDeleteCard = idCard => {
    popConfirm({
      title: `Are you sure to remove this Card?`,
      message: "Card will deleted on Lists",
      okText: " Yes",
      okType: "danger",
      cancelText: " No",
      onOkay: async () => {
        try {
          this._requestSource = api.generateCancelToken();
          const response = await apiDeleteCard(
            `/api/card/${idCard}`,
            this._requestSource.token
          );
          const { data } = response;
          if (response.status === 200) {
            alertFloat({
              type: "success",
              content: data.message
            });
            const { history } = this.props;
            const { match } = this.props;
            history.replace(`/board/${match.params.id}`);
            this.props.getBoardInfo();
          }
        } catch (err) {
          const error = axiosError(err);
          if (error === AXIOS_CANCEL_MESSAGE) {
            return;
          }
        }
      },
      onCancel: () => {}
    });
  };

  handleReplaceDesc = newDesc => {
    const { dataSources } = this.state;
    this.setState({
      dataSources: {
        ...dataSources,
        description: newDesc
      }
    });
  };

  renderCard() {
    const { loading, dataSources } = this.state;
    const { loadingProps } = this.props;
    if (loadingProps || loading) {
      return (
        <div className="task-detail">
          <LoadingCard />
        </div>
      );
    }
    return (
      <div className="task-detail">
        <div className="task-detail-main">
          <div className="task-detail-header">
            <section className="task-detail-group">
              <i
                className="icofont-paperclip "
                style={{ fontSize: "1.2rem" }}
              />
              <div className="flex-fill">
                <TitleCard dataSource={dataSources} />
                <div className="task-detail-meta">
                  <span>
                    In{" "}
                    <strong className="text-primary">
                      {get(dataSources, "category_list.title", "")}
                    </strong>{" "}
                    Created by{" "}
                  </span>
                  <strong className="text-primary">
                    {dataSources.created_by || "Redi rusmana"}{" "}
                  </strong>
                  {dataSources.created_at || ""}
                </div>
                <div className="task-detail-tags">
                  <StatusCard dataSource={dataSources} />
                  <PriorityCard dataSource={dataSources} />
                  <DeadlineCard dataSource={dataSources} />
                </div>
              </div>
              <div style={{ flex: 0 }}>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => this.handleDeleteCard(dataSources.id)}
                >
                  <i className="icofont-bin " /> Remove
                </button>
              </div>
            </section>
          </div>
          <div className="task-detail-body">
            <DescriptionCard
              dataSource={dataSources}
              handleReplaceDesc={this.handleReplaceDesc}
            />
            <ChecklistCard dataSource={dataSources} />
            <FileCard dataSource={dataSources} />
          </div>
          <div className="task-detail-footer">
            <MemberCard dataSource={dataSources} />
          </div>
        </div>
        <div className="task-detail-aside">
          <ActivityCard dataSource={dataSources} />
          <CommentCard dataSource={dataSources} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          visible={true}
          size="large"
          handleBack={this.onTaskClosed}
          afterClose={this.getCardInfo}
          wrapClassName="task-modal-wrapper"
          showTitle={false}
        >
          {this.renderCard()}
        </Modal>
      </React.Fragment>
    );
  }
}

export default CardPage;

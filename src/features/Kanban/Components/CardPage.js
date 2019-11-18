import React from 'react';
import logo from '../../../assets/images/bootstrap.png';
import '../Style/style.css';

class CardPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="container bg-grey">
          {/* Header Card Info */}
          <div className="row  p-2">
            <div className="col-lg-1">
              <i className="font-weight-bold icofont-paperclip icofont-1x m-3"></i>
            </div>
            <div className="col-lg-21">
              <h4 className="font-weight-bold">Name Task</h4>
              <p>
                Card telah dibuat oleh
                <b className="font-weight-normal text-success">Martiin Urseela</b>, 14 Agustus 2018
              </p>
            </div>
            <div className="col-lg-2">
              <a href={{}} className="btn btn-sm btn-danger m-3">
                <i className="icofont-bin"></i>
              </a>
            </div>
          </div>
          {/* Header Card Info */}

          {/* {Deadline, Priority, Status} = Card */}
          <div className="row  p-2">
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div>
                <label className="form-label font-weight-bold" htmlFor="">
                  Status
                </label>
                <input type="text" className={'form-control'} placeholder="Status" />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div>
                <label className="form-label font-weight-bold" htmlFor="">
                  Priority
                </label>
                <input type="text" className={'form-control'} placeholder="Priority" />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div>
                <label className="form-label font-weight-bold" htmlFor="">
                  DueDate
                </label>
                <input type="text" className={'form-control'} placeholder="DueDate" />
              </div>
            </div>
          </div>
          {/* {Deadline, Priority, Status} = Card */}
          <hr />

          <div className="container-fluid p-0">
            {/* Scrolinng list Content Card */}
            <div className="body-kanban-scroll">
              {/* Deskripsi */}
              <div className="row  p-2">
                <div className="col-lg-1">
                  <i className="font-weight-normal icofont-info icofont-1x m-3"></i>
                </div>
                <div className="col-lg-22">
                  <h3 className="font-weight-bold">Description</h3>
                  <div>
                    <input
                      type="text"
                      className={'form-control'}
                      placeholder="Tuliskan Deskripsinya boy ..."
                    />
                  </div>
                </div>
                <div className="col-lg-1"></div>
              </div>
              {/* Deskripsi */}

              <div className="row p-2">
                {/* List Checklist List Tasl */}
                <div className="col-lg-1">
                  <i className="font-weight-light icofont-checked m-3"></i>
                </div>
                <div className="col-lg-19">
                  <h3 className="font-weight-bold">Checklist</h3>
                  <div>
                    <div>Nama Task</div>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: '60%' }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        60%
                      </div>
                    </div>
                    {/* listTask Checklist */}
                    <div>
                      <div class="custom-control custom-checkbox ">
                        <input type="checkbox" class="custom-control-input" />
                        <label class="custom-control-label">Check this custom checkbox</label>
                      </div>
                    </div>
                    {/* listTask Checklist */}
                  </div>
                </div>
                <div className="col-lg-4 text-right">
                  <a href={{}} className="btn btn-link">
                    <i className=" icofont-plus" /> Add Checklist
                  </a>
                </div>
              </div>
              {/* List Checklist List Tasl */}

              <div className="row  p-2">
                {/* Attach File */}
                <div className="col-lg-1">
                  <i className=" icofont-ui-file icofont-1x m-3"></i>
                </div>
                <div className="col-lg-20">
                  <h3 className="font-weight-bold">Attachment</h3>
                </div>
              </div>
              {/* Attach File */}
            </div>
            {/* Scrolinng list Content Card */}
          </div>

          <hr />

          <div className="row  p-2">
            {/* List / Add Member */}
            <div className="col-lg-20">
              <img src={logo} className="p-1" width="40" height="40" alt="" />
              <img src={logo} className="p-1" width="40" height="40" alt="" />
              <img src={logo} className="p-1" width="40" height="40" alt="" />
            </div>
            <div className="col-lg-4 text-right">
              <a href={{}} className="btn btn-link ">
                <i className="icofont-plus"></i> Add Member
              </a>
            </div>
            {/* List / Add Member */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardPage;

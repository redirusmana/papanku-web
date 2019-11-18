import React from 'react';
import logo from '../../../assets/images/bootstrap.png';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../Style/style.css';
import '../../style/style.css';

class KanbanPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      btnDropright: false
    };
  }
  render() {
    return (
      <React.Fragment>
        {/* Navbar 1 */}
        <nav class="navbar navbar-expand-sm navbar-light bg-green">
          {/*bg-transparent */}
          {/* <a class="navbar-brand" href={{}}>
            <img src={logo} width="20" height="20" alt="" />
          </a> */}
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item py-0 ">
                <a href={{}} className="btn btn-sm font-weight-bold btn-outline-light ">
                  BOARD
                </a>
              </li>
            </ul>
            <ul class="navbar-nav m-auto">
              <li class="nav-item py-0 ">
                <img src={logo} width="30" height="30" alt="" />
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item py-0 mx-1">
                <a href={{}} className="btn btn-sm font-weight-bold btn-outline-light ">
                  A
                </a>
              </li>
              <li class="nav-item py-0 mx-1">
                <a href={{}} className="btn btn-sm font-weight-bold btn-outline-light ">
                  B
                </a>
              </li>
              <li class="nav-item py-0 mx-1">
                <img src={logo} width="30" height="30" alt="" />
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar 1 */}

        {/* Navbar 2 */}
        <nav class="navbar navbar-expand-sm navbar-light bg-secondary">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item py-0 font-weight-bold">
                BOARD NAME | Board |
                <img src={logo} width="15" height="15" alt="" />
                <img src={logo} width="15" height="15" alt="" />
                <img src={logo} width="15" height="15" alt="" />
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar 2 */}

        <div className="container-fluid bg-grey py-2">
          {/* Card  */}
          <div className="box-cards py-2">
            {/* Card */}
            <div className="box-cards-child-title ">
              <div className="clearfix mx-2">
                <span className="float-left">Name Cardnya (1)</span>
                <span className="float-right">
                  <Dropdown
                    size="sm"
                    direction="right"
                    isOpen={this.state.btnDropright}
                    toggle={() => {
                      this.setState({ btnDropright: !this.state.btnDropright });
                    }}
                  >
                    <DropdownToggle>
                      <i className="font-weight-normal icofont-gears" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </span>
              </div>
              {/* <div class="d-flex bd-highlight mx-2">
                <div class=" bd-highlight Roboto">Name Cardnya (1)</div>
                <div class="ml-auto bd-highlight">
                  <i className="font-weight-normal icofont-gears" />
                </div>
              </div> */}
            </div>
            {/* Card */}

            {/* {Status, Proprity} */}
            <div className="box-cards-child-body mx-auto">
              {/* Result Maps */}
              <div className="box-cards-child mx-auto my-1">
                <div className="font-weight-normal px-2">
                  <span className="badge badge-primary">Primary</span>
                  <span className="badge badge-danger">danger</span>
                </div>
                <div className="size-6 px-2 py-1">
                  <span>Name Child CardName Child </span>
                </div>
                <div className="px-2">
                  <div class="d-flex bd-highlight ">
                    <div class=" bd-highlight pr-2">
                      <i className="font-weight-normal icofont-checked" /> 2
                    </div>
                    <div class=" bd-highlight">
                      <i className="font-weight-normal icofont-ui-file" /> 2
                    </div>
                    <div class="ml-auto  bd-highlight">
                      <img src={logo} width="15" height="15" alt="" />
                      <img src={logo} width="15" height="15" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Result Maps */}
            </div>

            {/* {Status, Proprity} */}

            {/* Add New Card */}
            <div className="box-cards-child-footer">
              <div className="px-3 py-2">
                <button
                  type="button"
                  className="font-weight-bold btn btn-sm btn-primary btn-block "
                >
                  Add new list card <i className="font-weight-normal icofont-plus" />
                </button>
              </div>
            </div>
          </div>
          {/* Add New Card */}
          {/* Card  */}
        </div>

        <div>
          <a href={{}} className="act-btn btn-success">
            +
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default KanbanPage;

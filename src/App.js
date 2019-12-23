import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoadingPage from './provider/Display/LoadingPage';
import PageLogin from "./features/Auth/Screens/PageLogin";
import PageRegister from "./features/Auth/Screens/PageRegister";
import PageProfile from "./features/Profile/Screens/PageProfile";
import LandingPage from "./features/Landing/Screens/LandingPage";
import KanbanPageIndex from "./features/Kanban/Screens/KanbanPageIndex";
import RoutePrivate from "./features/Auth/Components/RoutePrivate";
import { getSavedToken, AUTH_SET_LOGIN } from "./features/Auth/action";
import { axiosError } from "./provider/Tools/converter";
import api, { AXIOS_CANCEL_MESSAGE } from "./provider/Tools/api";
import { doVerify } from "./AppAction";
import RouteGuard from "./features/Auth/Components/RouteGuard";
// import CardPage from "./features/Kanban/Components/CardPage";

class App extends React.PureComponent {
  state = {
    loading: true
  };

  componentDidMount() {
    this.verifyUser();
  }

  verifyUser = async () => {
    try {
      this._requestSource = api.generateCancelToken();

      const token = getSavedToken();
      const type = "Bearer";

      if (token) {
        api.setToken(type, token);

        const response = await doVerify(this._requestSource.token);

        this.props.setLogin({
          user: response.data.response,
          token,
          type
        });
      }

      this.setState({
        loading: false
      });
      
    } catch (e) {
      const error = axiosError(e);
      if (error === AXIOS_CANCEL_MESSAGE) {
        return;
      } 
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return <LoadingPage />
    }

    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <RouteGuard path="/login" exact component={PageLogin} />
          <RouteGuard path="/register" exact component={PageRegister} />

          <RoutePrivate path="/user" component={PageProfile} />
          <RoutePrivate path="/board/:id" component={KanbanPageIndex} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  token: store.auth.token,
  user: store.auth.user
});

const mapDispatchToProps = dispatch => ({
  setLogin: payload =>
    dispatch({
      type: AUTH_SET_LOGIN,
      payload
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

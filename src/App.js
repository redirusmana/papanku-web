import React from "react";
import { Route, Switch } from "react-router-dom";
import PageLogin from "./features/Auth/Screens/PageLogin";
import PageRegister from "./features/Auth/Screens/PageRegister";
import PageProfile from "./features/Profile/Screens/PageProfile";
import LandingPage from "./features/Landing/Screens/LandingPage";
import KanbanPageIndex from "./features/Kanban/Screens/KanbanPageIndex";
// import CardPage from "./features/Kanban/Components/CardPage";

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={PageLogin} />
          <Route path="/register" exact component={PageRegister} />
          <Route path="/user" component={PageProfile} />
          <Route path="/board" component={KanbanPageIndex} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

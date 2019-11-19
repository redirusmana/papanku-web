import React from "react";
// import PageLogin from './features/Auth/Screens/PageLogin';
// import PageRegister from './features/Auth/Screens/PageRegister';
import PageProfile from "./features/Profile/Screens/PageProfile";
// import LandingPage from "./features/Landing/Screens/LandingPage";
// import KanbanPage from "./features/Kanban/Screens/KanbanPage";
// import CardPage from "./features/Kanban/Components/CardPage";
// import ChatPage from "./features/Chat/Screens/ChatPage";
// import ChatPage from './features/Chat/Components/ChatPage';

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <PageProfile />
      </React.Fragment>
    );
  }
}

export default App;

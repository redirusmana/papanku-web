import React from 'react';
// import PageLogin from './features/Auth/Screens/PageLogin';
// import PageRegister from './features/Auth/Screens/PageRegister';
// import PageProfil from './features/Profile/Screens/PageProfile';
// import LandingPage from './features/Landing/Screens/LandingPage';
import KanbanPage from './features/Kanban/Screens/KanbanPage';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <KanbanPage />
      </div>
    );
  }
}

export default App;

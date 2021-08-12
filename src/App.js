import { Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/Header/SignIn/SignIn';
import SignUp from './components/Header/SignUp/SignUp';
import Alerts from './components/NavBar/Alerts/Alerts';
import Clients from './components/NavBar/Clients/Clients';
import Developments from './components/NavBar/Developments/Developments';
import Messages from './components/NavBar/Messages/Messages';
import Receptions from './components/NavBar/Receptions/Receptions';
import Staff from './components/NavBar/Staff/Staff';

const App = () => {
  return (
    <div className = "app-wrapper">
      <Header />
    <div className = "app-wrapper-content">
      <Route path="/Receptions"
        render={() => <Receptions />} 
      />
      <Route path="/Developments"
        render={() => <Developments />} 
      />
      <Route path="/Alerts"
        render={() => <Alerts />} 
      />
      <Route path="/Messages"
        render={() => <Messages />} 
      />
      <Route path="/Clients"
        render={() => <Clients />} 
      />
      <Route path="/Staff"
        render={() => <Staff />} 
      />
      <Route path="/SignIn" 
        render={() => <SignIn />}
      />
      <Route path="/SignUp" 
        render={() => <SignUp />}
      />
      </div>
    </div>
  )
}

export default App;

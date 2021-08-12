import { Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/Header/SignIn/SignIn';
import SignUp from './components/Header/SignUp/SignUp';
import Alerts from './components/NavBar/Alerts/Alerts';
import Clients from './components/NavBar/Clients/Clients';
import Developments from './components/NavBar/Developments/Developments';
import Messages from './components/NavBar/Messages/Messages';
import NavBar from './components/NavBar/NavBar';
import Receptions from './components/NavBar/Receptions/Receptions';
import Staff from './components/NavBar/Staff/Staff';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path='/receptions'
          render={() => <Receptions />}
        />
        <Route path='/developments'
          render={() => <Developments />}
        />
        <Route path='/alerts'
          render={() => <Alerts />}
        />
        <Route path='/messages'
          render={() => <Messages />}
        />
        <Route path='/clients'
          render={() => <Clients />}
        />
        <Route path='/staff'
          render={() => <Staff />}
        />
        <Route path='/signIn'
          render={() => <SignIn />}
        />
        <Route path='/signUp'
          render={() => <SignUp />}
        />
      </div>
    </div>
  )
}

export default App;

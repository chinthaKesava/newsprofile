import './App.css';
import Profile from './components/profile'
import NotFound from './components/notFound';
import Home from './components/home';
import Settings from './components/settings';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Profile}/>
      <Route exact path="/not-found" component={NotFound}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/settings" component={Settings}/>
      <Redirect to="/not-found"/>

    </Switch>
    </Router>
  );
}

export default App;

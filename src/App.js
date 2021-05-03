import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import TeamDetail from './components/TeamDetails/TeamDetail';

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route path="/home">
            <Header />
            <Home></Home>
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetail />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

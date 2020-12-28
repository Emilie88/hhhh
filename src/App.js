import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink
} from "react-router-dom";

import Dragon from './components/Dragon';
import Question from './components/Question';
import Chevalier from './components/Chevalier';
import Count from './components/Count';

const App = () => {

    return (
      <Router>
        <ul>
          <li><NavLink to="/question" activeClassName="active" >Question</NavLink></li>
          <li><NavLink to="/dragon" activeClassName="active" >Dragon</NavLink></li>
          <li><NavLink to="/chevalier" activeClassName="active" >Chevalier</NavLink></li>
          <li><NavLink to="/count" activeClassName="active" >Count</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/question" >
            <Question />
          </Route>
          <Route exact path="/dragon" >
            <Dragon/>
          </Route>
          <Route exact path="/chevalier" >
            <Chevalier/>
          </Route>
          <Route exact path="/count" >
            <Count/>
          </Route>
        </Switch>
      </Router>
    )
  }


export default App;
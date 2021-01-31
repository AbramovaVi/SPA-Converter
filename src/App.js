// import logo from './logo.svg';
import './App.css';
import Converter from './Components/Converter';
import Rates from './Components/Rates';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to='/converter'>Конвертер валют</Link>
          <Link to='/rates'>Курсы валют</Link>
        </nav>
        <Switch>
          <Route path='/converter' component={Converter} />
          <Route path='/rates' component={Rates} />
          <Redirect from='/' to='/converter'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default withRouter(App);

import Home from "./home";
import Headone from "./headone";
import Foot from "./foot";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./about";
import Location from "./location";
import Contact from "./contact";
function App() {
  return (
    <div>
      <Router>
        <Headone />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/location">
            <Location />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Foot />
      </Router>
    </div>
  );
}

export default App;

import Home from "./home";
import Headone from "./headone";
import Foot from "./foot";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./about";
import Location from "./location";
import Contact from "./contact";
import Webdesign from "./webdesign";
import Appdesign from "./appdesign";
import Graphic from "./graphic";
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
          <Route exact path="/webdesign">
            <Webdesign />
          </Route>
          <Route exact path="/appdesign">
            <Appdesign />
          </Route>
          <Route exact path="/graphic">
            <Graphic />
          </Route>
        </Switch>
        <Foot />
      </Router>
    </div>
  );
}

export default App;

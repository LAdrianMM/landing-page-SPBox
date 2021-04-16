import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import InfoBanner from "./pages/InfoBanner";
import Admin from "./pages/Admin";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Banner from "./components/Banner";

function App() {
  return (
    <div style={{backgroundColor: '#fafafa'}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Banner />
            <Projects />
            <Contact />
          </Route>
          <Route path="/info/:id">
            <InfoBanner />
          </Route>
          <Route path="/accessAdmin/SPBox">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

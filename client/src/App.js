import './App.css';
import Home from "./pages/Home"
import Community from "./pages/Community"
import Video from "./pages/Video"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/video">
          <Video />
        </Route>
        <Route path="Signup">
          <Signup />
        </Route>
        <Route path="/Community">
          <Community />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;

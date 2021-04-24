import './App.css';
import Home from "./pages/Home"
import Community from "./pages/Community"
import Video from "./pages/Video"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/video">
          <Video />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/community">
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

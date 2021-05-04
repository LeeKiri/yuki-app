import "./App.css";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Video from "./pages/Video";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedin, setLogin] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await axios
      .get("/api/user")
      .then((results) => {
        console.log(results, "results app")
        if (results.req.user === true) {
        setLogin(true);
        } else {
          setLogin(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            {isLoggedin ? (
              <Dashboard />
            ) : (
                <Login />
            )}
          </Route>
          <Route path="/video">
            {isLoggedin ? (
              <Video />
            ) : (
              <Route path="/login">
                <Login />
              </Route>
            )}
          </Route>
          <Route path="/community">
            {isLoggedin ? (
              <Community />
            ) : (
              <Route path="/login">
                <Login />
              </Route>
            )}
          </Route>
          <Route path="/chatroom/:roomId">
            {isLoggedin ? (
              <ChatRoom />
            ) : (
              <Route path="/login">
                <Login />
              </Route>
            )}
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

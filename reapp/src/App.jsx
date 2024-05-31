import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./routes/homepage/Home";
import ListPage from "./routes/homepage/listPage/ListPage";
import "./layout.scss";
import SinglePage from "./routes/SinglePage/SinglePage";
import Profile from "./routes/ProfilePage/Profile";

const App = () => {
  return (
    <Router>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={ListPage} />
            <Route path="/profile" component={Profile} />
            <Route path="/:id" component={SinglePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

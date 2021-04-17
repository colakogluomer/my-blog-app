import React from "react";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ViewPost from "./components/Posts/Post/ViewPost";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/admin" component={Auth} />

        <Route exact path="/:id" component={ViewPost} />
        {<Redirect from="/" to="/" />}
      </Switch>
    </Router>
  );
};

export default App;

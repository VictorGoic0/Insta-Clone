import React from "react";
import "./components/CSS/App.css";
import { Route } from "react-router-dom";
import PostsFeed from "./components/PostContainer/PostsFeed";
import PostPage from "./components/PostContainer/PostPage";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Authentication/PrivateRoute";

const App = () => {
  return (
    <>
      <PrivateRoute exact path="/" component={PostsFeed} />
      <PrivateRoute path="/posts/:id" component={PostPage} />
      <Route path="/login" component={Login} />
    </>
  );
};

export default App;

import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import Signup from "./components/SignUp";
import Movies from "./components/Movies";
import NewAndPopular from "./components/NewAndPopular";
import UserProfile from "./components/UserProfile";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage>
              <Navbar></Navbar>
            </LandingPage>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/signup'>
            <Signup></Signup>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/movies'>
            <Movies></Movies>
          </Route>
          <Route exact path='/new&popular'>
            <NewAndPopular></NewAndPopular>
          </Route>
          <Route exact path='/profile'>
            <UserProfile></UserProfile>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

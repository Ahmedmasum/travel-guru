import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Booking from "./components/Booking/Booking";
import BookingDetails from "./components/BookingDetails/BookingDetails";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <Route path="/booking/:destId">
              <Header></Header>
              <Booking></Booking>
            </Route>
            <PrivateRoute path="/booking-details/:bookingTitle">
              <Header></Header>
              <BookingDetails></BookingDetails>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

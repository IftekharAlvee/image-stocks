import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "../Admin/Admin";
import Checkout from "../Checkout/Checkout";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Order from "../Order/Order";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const UserContext = createContext();
const Home = () => {



    const [loggedInUser, setLoggedInUser] = useState({
        name: "" ,
        email: "" ,
        itemName: "",
        itemPrice: ""
    })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div>
        <Router>
          <div>
              
            <Header></Header>

            <Switch>
              <Route exact path="/">
                <Landing></Landing>
              </Route>
              <Route path="/home">
                <Landing></Landing>
              </Route>
              <PrivateRoute path="/admin">
                <Admin></Admin>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/checkout">
                    <Checkout></Checkout>
              </PrivateRoute>
              <PrivateRoute path="/order">
                  <Order></Order>
              </PrivateRoute>
              <Route path="*">
                <Landing></Landing>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </UserContext.Provider>
  );
};

export default Home;

import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddImage from "./AddImage";
import Inventory from "./Inventory";

const Admin = () => {
  return (
    <div>
      <Router>
        <Container>
            <h1>Welcome to Admin page!</h1>
          <div>
            <ListGroup horizontal>
              <ListGroup.Item><Link to="/admin/inventory">Manage Inventory</Link></ListGroup.Item>
              <ListGroup.Item><Link to="/admin/addImage">Add Image</Link></ListGroup.Item>
            </ListGroup>
          </div>
        </Container>

        <Switch>
          <PrivateRoute path="/admin/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/admin/addImage">
            <AddImage></AddImage>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default Admin;

import React, { useContext, useState } from "react";
import { Button, Container, Jumbotron, ListGroup } from "react-bootstrap";
import { UserContext } from "../Home/Home";

const Checkout = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { itemName, itemPrice } = loggedInUser;

  const [orderDetails, setOrderdetails] = useState([]);

  const handleCheckOut = () => {
    const orderInfo = {
      ...loggedInUser,
      orderTime: new Date()
    }
    setOrderdetails(orderInfo);
    
    fetch("https://lit-escarpment-79340.herokuapp.com/addOrder",{
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(orderInfo)
    })
    .then(res=> res.json())
    .then(data => {
      if(data){
        alert("order success fully");
      }
    })
  };


  return (
    <div>
      <Container>
        <Jumbotron fluid>
          <Container style={{textAlign: 'center'}}>
            <ListGroup>
              <ListGroup.Item><strong>Name: </strong> {itemName} <strong>Price: </strong> {itemPrice}</ListGroup.Item>
            </ListGroup>
            <Button onClick={handleCheckOut} style={{margin: "10px"}}>Checkout</Button>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Checkout;

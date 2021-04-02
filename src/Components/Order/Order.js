import React, { useContext, useEffect, useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { UserContext } from "../Home/Home";

const Order = () => {
  const [orderList, setOrderList] = useState([]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://lit-escarpment-79340.herokuapp.com/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      
      <Container>
        <h1>This is order</h1>
        {orderList?.map((order) => (
          <Jumbotron>
          <div>
                <p>This order placed in {order.orderTime}</p>
                <li>
                  <b>Ordered by: </b> {order.name}{" "}
                </li>
                <li>
                  <b>Order email: </b> {order.email}{" "}
                </li>
                <li>
                  <b>Ordered item:</b> {order.itemName}{" "}
                </li>
                <li>
                  <b>Price: </b> ${order.itemPrice}{" "}
                </li>
                <p>
                  {" "}
                  ## This order have been confirmed by <b>Solaiman sadhin</b> ##
                </p>
              </div>
          </Jumbotron>
        ))}
      </Container>
    </div>
  );
};

export default Order;

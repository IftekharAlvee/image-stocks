import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import InventoryList from "./InventoryList";

const Inventory = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5055/images")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Container>
        <h1>Inventory</h1>
        <ListGroup>
            {
                events?.map((event) => <InventoryList event={event}></InventoryList>)
            }
        </ListGroup>
      </Container>
    </div>
  );
};

export default Inventory;

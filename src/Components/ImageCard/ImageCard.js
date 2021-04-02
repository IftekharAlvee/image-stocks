import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Home/Home";

const ImageCard = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { imageURL, name, price } = props.items;

  const handleItemInfo = (items) => {
    const itemInfo = {
      name: loggedInUser.name,
      email: loggedInUser.email,
      itemName: name,
      itemPrice: price,
    };
    setLoggedInUser(itemInfo);
  };

  return (
    <Card>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>Photographer: {name}</Card.Title>
        <Card.Text> Price: $ {price} </Card.Text>
      </Card.Body>
      <Button onClick={handleItemInfo} variant="primary">
        <Link to="/checkout" style={{ color: "white" }}>
          Buy Now
        </Link>
      </Button>
    </Card>
  );
};

export default ImageCard;

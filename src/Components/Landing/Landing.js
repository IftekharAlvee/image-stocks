import React, { useEffect, useState } from "react";
import { CardColumns, CardDeck, Container, Jumbotron, Spinner } from "react-bootstrap";
import ImageCard from "../ImageCard/ImageCard";

const Landing = () => {
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
        <Jumbotron>
          <h1>Hello!</h1>
          <p>
            This is a Image stock website, Where you can upload your Image and 
            sell your Image. You can also Buy Image.
          </p>
          
        </Jumbotron>
        <CardColumns>
          {/* Spinner */}
          {events.length === 0 && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}

          {/* Card */}
          {events?.map((items) => (
            <ImageCard items={items} key={items._id}></ImageCard>
          ))}
        </CardColumns>
      </Container>
    </div>
  );
};

export default Landing;

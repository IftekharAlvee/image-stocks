import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddImage = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState([]);

  const onSubmit = (data) => {
      const eventData = {
          name: data.name,
          imageURL: imageURL,
          price: data.price
      }
      const url = "https://lit-escarpment-79340.herokuapp.com/addImage";
      fetch(url,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(eventData)

      })
      .then(response => {
          console.log(response);
          alert("Image added successfully")
        })

      console.log(data);
    };

  const handleImageUpload = event => {
    //   console.log(event.target.files[0]);
      const imageData = new FormData();
      imageData.set('key', '75c6082fcb864884103abf85530dab32');
      imageData.append('image', event.target.files[0]);

      axios.post('https://api.imgbb.com/1/upload',imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const containerStyle = {
    textAlign: 'start',
     border: '1px solid lightgray',
      padding: '20px',
      margin: '20px'
  }

  return (
    <Container >
        <div style={containerStyle}>
        <h1>Add your awsome image here</h1>
        <p><small>[Please Add 300x300 size image, it's not mandatory but recommended] </small></p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label><b>Photographer Name:--</b></label>
          <input name="name" defaultValue="Photographer Name" ref={register} />
          <br/>
          <br/>
          <label><b>Photo Price:--</b></label>
          <input name="price" defaultValue="100" type="number" ref={register} />
          <br/>
          <br/>
          <label htmlFor=""><b>Upload your image:--</b></label>
          <input name="exampleRequired" type="file" onChange={handleImageUpload} />
          <br/>
          <br/>
          <input type="submit" />
        </form>
      </div>
        </div>
    </Container>
  );
};

export default AddImage;

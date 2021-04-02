import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const InventoryList = (props) => {
    const { name, price, _id} = props.event;

    const deleteImage = (id) => {
        console.log(id);
        fetch(`http://localhost:5055/deleteImage/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            alert("Item is deleted ");
        })
    }
    return (
        
            <ListGroup.Item> Name: {name} Price: {price} <br/> <Button onClick={() => deleteImage(_id)}>Delete Item</Button> </ListGroup.Item>
        
    );
};

export default InventoryList;
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const InventoryList = (props) => {
    const { name, price, _id} = props.event;

    const deleteImage = (id) => {
        console.log(id);
        fetch(`https://lit-escarpment-79340.herokuapp.com/deleteImage/${id}`,{
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
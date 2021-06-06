import React from 'react'
import { Form } from 'react-bootstrap'
/**
* @author
* @function Input
**/

const Input = (props) => {
  return(
    <Form.Group controlId="formBasicEmail">
    <Form.Label>{props.label}</Form.Label>
    <Form.Control type={props.type} placeholder={props.placeholder} />
    <Form.Text className="text-muted">
        {props.errorMassage}
    </Form.Text>
  </Form.Group>
   )

 }

export default Input
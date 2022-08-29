import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <div className="bg">
      <h1 className="heading-style"> Contact</h1>
      <Form>
        <Form.Group className="form-name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="form-email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="form-comment">
          <Form.Label>comment:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            placeholder="Enter your comment"
          />
        </Form.Group>
        <Button className="button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

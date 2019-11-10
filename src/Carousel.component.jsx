import React from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.styles.scss";

export const Carousel = () => {

  return (
    <div className="card-list">
      <Modal.Dialog>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>From</Form.Label>
              <Form.Control type="text" placeholder="Enter state..." />
              <Form.Label>To</Form.Label>
              <Form.Control type="text" placeholder="Enter State..." />
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="dark">Search</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

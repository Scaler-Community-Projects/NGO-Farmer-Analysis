import React from "react";
import { Container, Form, Button, FormGroup} from "react-bootstrap";

const DisseminationForm = () => {
return(
    <Container>
        <h3 className = "my-3 text-center">Dissemination Details Form</h3>
        <Form>
        <Form.Group controlId="DateOfDissemination">
          <Form.Label>Date of Dissemination</Form.Label>
          <Form.Control type="Date" placeholder="Enter today's date" />
        </Form.Group>
        <Form.Group controlId="StartTime">
          <Form.Label>Start Time</Form.Label>
          <Form.Control type="time"  placeholder="Enter the time at which the meeting started" />
        </Form.Group>
        <Form.Group controlId="EndTime">
          <Form.Label>End Time</Form.Label>
          <Form.Control type="time" placeholder="Enter the time at which the meeting ended" />
        </Form.Group>
        <Form.Group controlId="Place">
          <Form.Label>Place</Form.Label>
          <Form.Control type="text" placeholder="Enter place of the meeting" />
        </Form.Group>
        <Form.Group controlId="Video">
          <Form.Label>Name of Video</Form.Label>
          <Form.Control type="text" placeholder="Enter video's name" />
        </Form.Group>
        <Form.Group controlId="GramPanchayat">
          <Form.Label>Name of Gram Panchayat</Form.Label>
          <Form.Control type="text" placeholder="Enter name of Gram Panchayat" />
        </Form.Group>
        <Form.Group controlId="NameCPR">
          <Form.Label>Name of CPR</Form.Label>
          <Form.Control type="text" placeholder="Enter CPR's name" />
        </Form.Group>
        <Form.Group controlId="NameVillage">
          <Form.Label>Name of Village</Form.Label>
          <Form.Control type="text" placeholder="Enter Village's name" />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" block>
          Submit
        </Button>
        </Form>
    </Container>
)
};

export default DisseminationForm;
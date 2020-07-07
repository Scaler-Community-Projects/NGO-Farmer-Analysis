import React from "react";
import { Container, Form, Button, FormGroup, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DisseminationAttendeeForm = (props) => {
  return (
    <Container>
      <h3 className="my-3 text-center">Dissemination Attendee Form</h3>
      <Form>
        <Form.Group controlId="AttendeeFarmerName">
          <Form.Label>Farmer's Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="AttendeeFatherHusbandName">
          <Form.Label>Father's / Husband's Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="AttendeeCollectiveName">
          <Form.Label>Collective's Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="AttendeeAdoptionWish">
          <Row>
            <Col md={3}>
              <Form.Label>Adoption wish / Willing to adopt</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Check
                inline
                type="radio"
                label="Yes"
                name="adoptionwish"
                id="adoptionwishyes"
              />
              <Form.Check
                inline
                type="radio"
                label="No"
                name="adoptionwish"
                id="adoptionwishno"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="AttendeeQuesAsked">
          <Form.Label>Questions asked by farmer </Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default DisseminationAttendeeForm;

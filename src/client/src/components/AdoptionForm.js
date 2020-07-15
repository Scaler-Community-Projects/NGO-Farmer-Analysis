import React from "react";
import { Container, Form, Button, FormGroup, Row, Col } from "react-bootstrap";

const AdoptionForm = (props) => {
return(
  <Container>
      <h3 className="my-3 text-center"> Adoption Form</h3>
      <Form>
        <Form.Group controlId="FarmerName">
          <Form.Label>Farmer's Name</Form.Label>
          <Form.Control type="text" placeholder="Enter farmer's name" />
        </Form.Group>
        <Form.Group controlId="FatherHusbandName">
          <Form.Label>Father's / Husband's Name</Form.Label>
          <Form.Control type="text" placeholder="Enter father's/husband's name" />
        </Form.Group>
        <Form.Group controlId="CollectiveName">
          <Form.Label>Collective's Name</Form.Label>
          <Form.Control type="text" placeholder="Enter collective's name"/>
        </Form.Group>
        <Form.Group controlId="VillageName">
          <Form.Label>Village Name</Form.Label>
          <Form.Control type="text" placeholder="Enter village's name" />
        </Form.Group>
        <Form.Group controlId="VideoName">
          <Form.Label>Video Name</Form.Label>
          <Form.Control type="text" placeholder="Enter video's name from which farmer was educated"/>
         </Form.Group>
        
        <Form.Group controlId="DateOfAdoption">
          <Form.Label>Date of Adoption</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>
        <Form.Group controlId="Area">
          <Form.Label>Area(Land Farmer Owns)</Form.Label>
          <Form.Control type="number" placeholder="Enter the land area farmer owns"/>
        </Form.Group>
        <Form.Group controlId="DateOfVerification">
          <Form.Label>Date of verification</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
    
        <Form.Group controlId="AdoptionMethod">
          <Row>
            <Col md={3}>
              <Form.Label>Adoption by Video/Meeting</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Check
                inline
                type="radio"
                label="Video"
                name="adoption"
                id="adoptionwish"
              />
              <Form.Check
                inline
                type="radio"
                label="Meeting"
                name="adoption"
                id="adoptionwish"
              />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit" size="lg" block>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

 export default AdoptionForm;
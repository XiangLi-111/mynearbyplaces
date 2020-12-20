import React, {Component} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

class AddPlace extends Component {
    render() {
        return (
            <Form className="m-5" method="post" action={process.env.NODE_ENV === 'development' ? 'http://localhost:3001/place' : 'https://xiangli-nearbyplaces-api.herokuapp.com/place'}>
                <h1 className="text-center">add a new place
                    <Link className="float-right" to="/">back</Link>
                </h1>
                <Form.Row>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Place Name" name="name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" required>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Delivery">Delivery</option>
                        <option value="Takeout">Takeout</option>
                        <option value="Accountants">Accountants</option>
                        <option value="Plumbers">Plumbers</option>
                        <option value="Auto">Auto Repair</option>
                    </Form.Control>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Place City" name="city"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Place State" name="state"/>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="description" rows={3} />
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Review
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="first"
                                name="review"
                                value={1}
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="second"
                                name="review"
                                value={2}
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="third"
                                name="review"
                                value={3}
                                id="formHorizontalRadios3"
                            />
                            <Form.Check
                                type="radio"
                                label="forth"
                                name="review"
                                value={4}
                                id="formHorizontalRadios4"
                            />
                            <Form.Check
                                type="radio"
                                label="fifth"
                                name="review"
                                value={5}
                                id="formHorizontalRadios5"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default AddPlace;
import React, { useState } from 'react';
import {Button, Card, Col, Form, Modal} from 'react-bootstrap';
import axios from "axios";

import { URL } from '../../pages/index';

function PlaceItem(props) {
    const {
        item
    } = props;
    const [show, setShow] = useState(false);
    const [review, setReview] = useState(1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleSave() {
        axios.post(`${URL}/review/${item.id}`, {
            review
        }).then(res => {
            if (res.data.msg === 'review update success') {
                alert('add review success');
            } else {
                alert('add review error');
            }
            setShow(false);
            props.reloadList();
        })
    }
    function handleFormChange(e) {
        setReview(e.target.value)
    }
    return (
        <Card className="m-1" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">state: {item.state}  city: {item.city}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Category: {item.category}</Card.Subtitle>
                <Card.Text>Description: {item.description}</Card.Text>
                <Card.Text>review: {item.review || 0}</Card.Text>
                <Button variant="primary" onClick={handleShow}>Go Review</Button>

            </Card.Body>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Review</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onChange={handleFormChange}>
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
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSave}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
}

export default PlaceItem;
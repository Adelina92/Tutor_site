import {useRef, useState} from "react";
import axios from 'axios'
import {Button, Form, Modal, Navbar, Toast} from 'react-bootstrap';

export default function Footer () {
    const [show, setShow] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [responseData, setResponseData] = useState("");

    const name = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const message = useRef(null);

    console.log(name);

    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    }

    const handleClose = () => setShow(false)

    const handleCloseNotification = () => setShowNotification(false)

    const handleRequest = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: `http://localhost:5000/feedback`,
            data: {
                name: name.current.value,
                email: email.current.value,
                phone: phone.current.value,
                message: message.current.value
            }
        }).then((response) => {
            setShow(false);
            setShowNotification(true);
            setResponseData(response.data);
        }).catch((reason) => console.error(reason))
    }

    return (
        <>
            <Toast
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    zIndex: 99999,
                    margin: '10px',
                }}
                show={showNotification}
                onClose={handleCloseNotification}
            >
                <Toast.Header>
                    <strong className="mr-auto">Server response</strong>
                </Toast.Header>
                <Toast.Body>{responseData}</Toast.Body>
            </Toast>

            <Navbar bg="light" expand="lg" fixed={"bottom"}>
                <Navbar.Brand>Contact me</Navbar.Brand>
                <Button variant={"primary"} onClick={handleShow}>Leave your request</Button>
            </Navbar>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Leave your request</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form id="requestForm">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={name} autoComplete="false" type="text" placeholder="Enter your name"/>
                        </Form.Group>


                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={email} placeholder="Enter your email"/>
                            <Form.Text className="text-muted">We'll never share your email with anyone
                                else</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="phone" ref={phone} placeholder="Enter your phone number"/>
                            <Form.Text className="text-muted">We'll never share your phone number with anyone
                                else</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control ref={message} as="textarea" rows={3} placeholder="Enter your message"/>
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={handleRequest}>Submit</Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

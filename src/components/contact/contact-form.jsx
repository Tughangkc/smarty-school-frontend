"use client";
import React, { useRef } from "react";
import { Button, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { TfiUser, TfiEmail, TfiTag, TfiComment, TfiLocationArrow } from "react-icons/tfi";
import "./contact-form.scss"
import { createContactMessageAction } from "@/actions/contact-actions";
import { initialResponse } from "@/helpers/form-validation";
import {useFormState} from "react-dom";
import { swAlert } from "@/helpers/swal";
const ContactForm = () => {

    const [state, dispatch] = useFormState(createContactMessageAction, initialResponse);

    const formRef = useRef();

    if(state.message){
        if(state.ok){
            formRef.current.reset();
            swAlert(state.message, "success")
        }
        else{
            swAlert(state.message, "error")
        }
    }


    return (
        <div className="contact-form">
            <h2>Send Me Message</h2>
                <Form action={dispatch} ref={formRef}>
            <Row>
                    <Col md={6}>
                        <InputGroup className="mb-3" size="lg">
                            <InputGroup.Text id="name">
                                <TfiUser />
                            </InputGroup.Text>
                            <Form.Control
                            name="name"
                                placeholder="Your name"
                                aria-label="Your name"
                                aria-describedby="name"
                                isInvalid={!!state.errors?.name}
                            />
                            <FormControl.Feedback type="invalid">{state.errors?.name}</FormControl.Feedback>
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <InputGroup className="mb-3" size="lg">
                            <InputGroup.Text id="email">
                                <TfiEmail />
                            </InputGroup.Text>
                            <Form.Control
                            name="email"
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="email"
                                isInvalid={!!state.errors?.email}
                            />
                            <FormControl.Feedback type="invalid">{state.errors?.email}</FormControl.Feedback>
                        </InputGroup>
                    </Col>
                    <Col xs={12}>
                        <InputGroup className="mb-3" size="lg">
                            <InputGroup.Text id="subject">
                                <TfiTag />
                            </InputGroup.Text>
                            <Form.Control
                            name="subject"
                                placeholder="Subject"
                                aria-label="subject"
                                aria-describedby="subject"
                                isInvalid={!!state.errors?.subject}
                            />
                            <FormControl.Feedback type="invalid">{state.errors?.subject}</FormControl.Feedback>
                        </InputGroup>
                    </Col>
                    <Col xs={12}>
                        <InputGroup className="mb-3" size="lg">
                            <InputGroup.Text id="message">
                                <TfiComment />
                            </InputGroup.Text>
                            <Form.Control
                            name="message"
                                as="textarea"
                                placeholder="Your message"
                                aria-label="Your message"
                                aria-describedby="message"
                                isInvalid={!!state.errors?.message}
                            />
                            <FormControl.Feedback type="invalid">{state.errors?.message}</FormControl.Feedback>
                        </InputGroup>
                    </Col>
            </Row>
                    <Button type="submit" variant="outline-primary"><TfiLocationArrow/>Send</Button>
                </Form>
        </div>
    );
};
export default ContactForm;
import React, { useEffect } from 'react';
import { useState } from '@hookstate/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import ClearUser from '../../common/ClearUser';


const Login = props => {
  const state = useState({
    Email: "", Password: "",
    UI: {
      IsLoading: false,
      validated: false
    }
  });

  useEffect(() => {

    ClearUser();
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log("form validity", form.checkValidity());
    if (form.checkValidity() === false) {
      
      event.stopPropagation();

    } else {

      console.log("Continue to next process", state.value);

      state.UI.IsLoading.set(true);
      setTimeout(() => {
        state.UI.IsLoading.set(false);
        localStorage.setItem("LogedUser", state.Email.value);
        console.log("root ", Routes.Dashboard.path);
        debugger;

        props.history.push(Routes.Dashboard.path);
      }, 5000);

    }

    state.UI.validated.set(true);

  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <h2 className="text-center mb-4">
            Virtual Office
          </h2>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h4 className="mb-0">Sign in to our platform</h4>
                </div>
                <Form className="mt-4" 
                
                noValidate validated={state.UI.validated.value} onSubmit={handleSubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" placeholder="example@company.com"
                        value={state.Email.value}
                        onChange={(e) => { state.Email.set(e.target.value) }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid e-mail
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Password"
                          value={state.Password.value}
                          onChange={(e) => { state.Password.set(e.target.value) }} />
                        <Form.Control.Feedback type="invalid">
                          Password is required.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4 text-right">

                      <Card.Link className="small text-end">Lost password?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100"
                    disabled={state.UI.IsLoading.value}
                  >
                    {state.UI.IsLoading.value ?

                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null}
                    Sign in
                  </Button>
                </Form>


                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={Routes.SignIn.path} className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Login;
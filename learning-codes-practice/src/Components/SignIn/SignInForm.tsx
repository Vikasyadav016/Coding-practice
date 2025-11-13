// src/pages/SignInPage.js

import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signin-page d-flex align-items-center justify-content-center">
      <Container>
        <Row className="justify-content-center">
          <Col xxl={12}>
            <Card className="signin-card shadow">
              <Card.Body>
                <div className="text-center mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Login Icon"
                    className="signin-icon mb-3"
                  />
                  <h3 className="fw-bold">Welcome Back</h3>
                  <p className="text-muted">Sign in to continue learning</p>
                </div>

                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      className="text-muted"
                    />
                    <a href="#forgot" className="forgot-link">
                      Forgot Password?
                    </a>
                  </div>

                  <Button variant="primary" type="submit" className="w-100">
                    Sign In
                  </Button>

                  <div className="text-center mt-3">
                    <span className="text-muted">
                      Don’t have an account?{" "}
                      <a href="#signup" className="signup-link">
                        Sign Up
                      </a>
                    </span>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignInPage;

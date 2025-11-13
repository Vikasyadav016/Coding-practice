import { Container, Row, Col, Button, Card, Navbar, Nav } from "react-bootstrap";
import "./LandingPage.css";
import { useState } from "react";
import SignInModal from "../SignIn/SignInModal";
import SignupModal from "../SignUp/SignUp";

const LandingPage = () => {
  const [show, setShow] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleCloseSignUpModal = () => setShowSignUpModal(false);
  const handleShowSignUpModal = () => setShowSignUpModal(true);

  return (
    <div className="landing-page">
      <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            Learnify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <SignInModal show={show} handleClose={handleClose} handleShow={handleShow} />
              <SignupModal show={showSignUpModal} handleClose={handleCloseSignUpModal} handleShow={handleShowSignUpModal} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="hero d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Learn Anytime, Anywhere</h1>
              <p>
                Join thousands of learners gaining new skills through online courses,
                expert-led videos, and premium content.
              </p>
              <Button variant="primary" size="lg" className="me-3">
                Explore Courses
              </Button>
              <Button variant="outline-light" size="lg">
                Become an Instructor
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
                alt="Learning"
                className="img-fluid hero-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="courses" className="courses py-5">
        <Container>
          <h2 className="text-center mb-5">Popular Courses</h2>
          <Row>
            {["Web Development", "Data Science", "Graphic Design"].map((course, idx) => (
              <Col md={4} key={idx}>
                <Card className="course-card mb-4">
                  <Card.Img variant="top" src={`https://picsum.photos/400/250?random=${idx}`} />
                  <Card.Body>
                    <Card.Title>{course}</Card.Title>
                    <Card.Text>
                      Learn {course.toLowerCase()} with hands-on projects and video tutorials.
                    </Card.Text>
                    <Button variant="primary">View Course</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="about" className="about py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
                alt="About"
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <h2>About Learnify</h2>
              <p>
                Learnify is your go-to platform for online education. We bring together
                learners and instructors from around the world to share knowledge and grow together.
              </p>
              <Button variant="primary">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer py-4 text-center">
        <Container>
          <p>&copy; {new Date().getFullYear()} Learnify. All rights reserved.</p>
        </Container>
      </footer>

    </div>
  );
};

export default LandingPage;

import React from "react";
import Homepage from "./components/pages/homepage/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import ItineraryForm from "./components/pages/itinerary/CreateItinerary";
// CSS and bootstrap
import "./NavFooter.css";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';


=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItineraryForm from "./components/pages/itinerary/ItineraryForm";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
>>>>>>> dev

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
      <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Link to="#/">Triptinerary</Link>
    <Nav.Item>
      <Link to="#/login">Login/Lougout</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="#/signup">Sign Up</Link>
    </Nav.Item>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Profile</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    

        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/itineraryform" element={<ItineraryForm />}/> */}
=======
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand href="#">Triptinerary</Navbar.Brand>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Login/Lougout</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Sign Up</Nav.Link>
            </Nav.Item>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/CreateItinerary" element={<CreateItinerary />} />
>>>>>>> dev
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

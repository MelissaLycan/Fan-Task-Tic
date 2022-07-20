import React, { useState } from "react";
import { Route, Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Actions from "./Actions";

import "./Header.css";

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          expand={expand}
          className="rounded-pill py-4 m-5 "
        >
          <Container fluid className="justify-content-around headContent">
            <Navbar.Brand href="/" className="headContent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4rem"
                height="4rem"
                fill="currentColor"
                className="bi bi-heart-pulse-fill col headContent"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9H1.475ZM.879 8C-2.426 1.68 4.41-2 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.88Z"
                />
              </svg>
              <h1>Fan-Task-Tik</h1>
            </Navbar.Brand>
            <Navbar.Toggle
              className="navbar-dark"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Fan-Task-Tik
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 menuText">
                  <Nav.Link>
                    <Link to="/Merch">Merch</Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/Band/Actions">Actions</Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/User">User</Link>
                  </Nav.Link>

                  <NavDropdown
                    title="Bands"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                      <Link to="/Band">Nordic Daughter</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action4">{""}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">{""}</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;

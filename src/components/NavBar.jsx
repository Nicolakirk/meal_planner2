import { Button, Container, Navbar, Modal, ModalHeader } from "react-bootstrap";

import { useState, useContext } from "react";

import { RecipeContext } from "../MealContext";
import Planner from "./Planner";
import html2pdf from "html2pdf.js";

function NavBar() {
  const planner = useContext(RecipeContext);
  console.log(planner.items);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const downloadAsPDF = () => {
    const content = document.getElementById("plannerContent");

    html2pdf(content);
  };

  return (
    <>
      <Navbar expand="sm" bg="light" data-bs-theme="light">
        <Navbar.Brand href="/"> Recipe Planner</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow} variant="outline-dark">
            Meal Planner
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton></ModalHeader>
        <Modal.Body>
          <Container id="plannerContent">
            <p> Meal planner: </p>
            {planner.items.map((currentItem, index) => (
              <Planner currentItem={currentItem} key={index} />
            ))}
          </Container>
          <Container className="justify-content-center">
            <Button
              onClick={downloadAsPDF}
              variant="success"
              className="justify-center"
            >
              Download as PDF
            </Button>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBar;

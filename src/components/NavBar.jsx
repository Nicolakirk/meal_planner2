import { Button , Container, Navbar, Modal, NavLink, Nav, ModalHeader} from 'react-bootstrap';
import  { useState, useContext, useEffect } from 'react'

import { RecipeContext } from '../MealContext';
import Planner from './Planner';
import html2pdf from 'html2pdf.js';


function NavBar(){
    const planner = useContext(RecipeContext)
    console.log(planner.items)

    const [ show, setShow ] = useState(false);


    const handleClose =()=>{
    setShow(false);
    }
    const handleShow =()=>{
    setShow(true);
    }

    const downloadAsPDF = () => {
        const content = document.getElementById('plannerContent'); // Add an ID to your Container
    
        html2pdf(content);
      };


    return(

        <>
        <Navbar expand="sm" bg="light" data-bs-theme="light">
            <Navbar.Brand href="/"> Recipe Planner

            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow} variant="outline-dark">Meal Planner</Button>
            </Navbar.Collapse>

        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <ModalHeader closeButton></ModalHeader>
            <Modal.Body>
            <Container id="plannerContent">
                <p> Meal planner: </p>
                {planner.items.map((currentItem, index)=>(
                    <Planner currentItem={currentItem} key={index}/>

                ))}
                  </Container>
                <Container>
                <div>
<Button onClick={downloadAsPDF}>Download as PDF</Button>
</div>
                </Container>
            </Modal.Body>

        </Modal>
        </>
    )
}

export default NavBar;
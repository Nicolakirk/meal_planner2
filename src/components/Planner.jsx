import { Button, Container, Row, Col, Card } from "react-bootstrap";




function Planner({ currentItem }) {
 

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h3> {currentItem.day}</h3>
                <p> {currentItem.name} </p>
                <Button
                  href={currentItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Recipe Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Planner;

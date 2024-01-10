import { useContext, useState } from "react";
import {
  Modal,
  Dropdown,
  Card,
  Button,
  
  CardBody,
  
} from "react-bootstrap";
import { RecipeContext } from "../MealContext";

const RecipeCard = ({ item, recipeArray, setRecipeArray }) => {
  const planner = useContext(RecipeContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
 
  const [errorMessage, setErrorMessage] = useState("");
  console.log(selectedDay);

  const handleAddToPlanner = () => {
    setShowModal(true);
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
    console.log(selectedDay);
    setErrorMessage("");
  };

  const handleOKClick = (day) => {
    if (selectedDay && !selectedDays.includes(selectedDay)) {
      planner.addOneToPlanner(
        item.recipe.label,
        item.recipe.ingredientLines,
        item.recipe.url,
        selectedDay
      );
      setSelectedDays([...selectedDays, selectedDay]);
      setSelectedDay(null);
      setShowModal(false);
    } else if (selectedDays.includes(selectedDay)) {
      setErrorMessage(
        `You have already selected ${selectedDay}. Choose another day.`
      );
    } else {
      setErrorMessage("Please select a day.");
    }
  };
  return (
    <Card>
      <CardBody align="center">
        <img
          src={item.recipe.image}
          alt={item.recipe.label}
          className="img-thumbnail"
        />
        <Card.Title>
          {" "}
          <h4>{item.recipe.label}</h4>
        </Card.Title>
        <Card.Text> Dishtype: {item.recipe.dishType[0]}</Card.Text>
        <Card.Text>
          {" "}
          <p> Time: {item.recipe.totalTime} minutes</p>
        </Card.Text>
        <Card.Text>
          {" "}
          <h4> Ingredients</h4>{" "}
        </Card.Text>
        <Card.Text>
          {" "}
          {item.recipe.ingredientLines.map((ingredient) => (
            <div key={ingredient}>{ingredient}</div>
          ))}
        </Card.Text>
        <Card.Link
          href={item.recipe.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          View Recipe{" "}
        </Card.Link>
      </CardBody>
      <Button variant="outline-dark" size="sm" onClick={handleAddToPlanner}>
        + To Meal Planner
      </Button>

      {showModal && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Select Day</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Dropdown onSelect={handleDaySelect}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                {selectedDay ? selectedDay : "Select Day"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <Dropdown.Item key={day} eventKey={day}>
                    {day}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Modal.Body>
          <Modal.Footer>
            <p>{errorMessage}</p>
            <Button variant="success" onClick={handleOKClick}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Card>
  );
};

export default RecipeCard;

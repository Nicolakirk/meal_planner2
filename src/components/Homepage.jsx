import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { fetchRecipebyFood } from "../utils/api";
import RecipeCard from "./RecipeCards";

const Homepage = () => {
  const [foodChoice, setFoodChoice] = useState("");
  const [recipeArray, setRecipeArray] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipebyFood(foodChoice).then((newRecipe) => {
      setRecipeArray(newRecipe);
      console.log(recipeArray);
    });
  };

  return (
    <>
      <p align="center" className="p-3">
        {" "}
        Welcome to the Recipe Finder
      </p>
      <Container align="center">
        <Form className="p-3" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasic">
            <Form.Label>Enter a food to search for:</Form.Label>
            <Form.Control
              type="foodChoice"
              placeholder="Enter a food here"
              value={foodChoice}
              onChange={(e) => setFoodChoice(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="success" className="m-3" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>

      <Row xs={1} md={3} className="g-4">
        {recipeArray.map((item) => (
          <Col key={item.recipe.label}>
            <RecipeCard
              item={item}
              recipeArray={recipeArray}
              setRecipeArray={setRecipeArray}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;

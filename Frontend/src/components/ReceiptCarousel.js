import React, { useState, useRef } from 'react';
import "./ReceiptCarousel.css"

import Icon from '@mdi/react';
import { mdiHeartOutline, mdiClose } from '@mdi/js';
import Filter from "./Filter"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import { useContext } from 'react';
import { userRecipesContext } from "../providers/UsersRecipesProvider";

function ReceiptCarousel(props) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const { addUserRecipes } = useContext(userRecipesContext);

  console.log(props.recipes[index])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onRejectClick = () => {
    ref.current.prev();
  };
  const onLikeClick = () => {
    // index && addRecipe(objrecipe)
    console.log(`I liked ${props.recipes[index].title}`)
    ref.current.next();
  };

  let recipesElements = [];

  for (let recipe of props.recipes) {
    recipesElements.push(
    <Carousel.Item key={recipe.id}>
    <img src={recipe.image} className="mainPicture"/>
    <Carousel.Caption>
    <h3> {recipe.title} </h3>
    </Carousel.Caption>
    </Carousel.Item>
    )}

  return (
    <Container>
      <Filter />
      <Row className="mainRecipeInfo">
        <Col xs={8}>
        <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        ref={ref}
        interval={null}
        >
        { recipesElements }
        </Carousel>
        <div className="buttons">
        <Col xs="auto"><Button className="reject btn" onClick={onRejectClick}><Icon path={mdiClose} size={1.5} /></Button></Col>
        <Col xs="auto"><Button className="accept btn" onClick={onLikeClick}><Icon path={mdiHeartOutline} size={1.3} /></Button></Col>
        </div>
        </Col>
        <Col className="ingredients" xs={4}>
          <h4> Preparation time:  minutes</h4>
          <h4> Level: Easy</h4>
        <p> ⅔ cup soy sauce
          ¼ cup brown sugar
          ½ teaspoon ground ginger
          1 pinch red pepper flakes, or to taste
          2 tablespoons water
          2 tablespoons cornstarch
          2 teaspoons vegetable oil, or to taste
          3 skinless, boneless chicken breast halves, cut into chunks
          1 onion, sliced
          3 cups broccoli florets
          ⅔ cup soy sauce
          ¼ cup brown sugar
          ½ teaspoon ground ginger
          1 pinch red pepper flakes, or to taste
          2 tablespoons water
          2 tablespoons cornstarch
          2 teaspoons vegetable oil, or to taste
          3 skinless, boneless chicken breast halves, cut into chunks
          1 onion, sliced
          3 cups broccoli florets</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ReceiptCarousel;
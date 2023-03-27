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

import { useContext, useEffect } from 'react';
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

  for (const recipe of props.recipes) {
    recipesElements.push(
      <Carousel.Item key={recipe.id}>
        <img src={recipe.image} className="mainPicture" />
        <Carousel.Caption>
          <h3> {recipe.title} </h3>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  // useEffect(() => {
  //   const intolerances = [loadedRecipes.dairyFree, loadedRecipes.glutenFree, loadedRecipes.vegan, loadedRecipes.vegetarian];

  //   let tags = [];
  //   if (loadedRecipes.dairyFree) {
  //     tags.push('Dairy Free 🐮')
  //   } else if (loadedRecipes.glutenFree) {
  //     tags.push('Gluten Free 🍞')
  //   } else if (loadedRecipes.vegan) {
  //     tags.push('Vegan 🥬')
  //   } else if (loadedRecipes.vegeterian) {
  //     tags.push('Veveterian 🥗')
  //   }
  //   return <h4> {tags} </h4>;
  // }, [props.recipes[index]]);


  function SpecialTags() {
    if (props.recipes.length === 0) {
      return <h4> </h4>
    }
    const loadedRecipes = props.recipes[index];

    let tags = [];
    if (loadedRecipes.dairyFree) {
      tags.push('Dairy Free 🐮')
    } if (loadedRecipes.glutenFree) {
      tags.push('Gluten Free 🍞')
    } if (loadedRecipes.vegan) {
      tags.push('Vegan 🥬')
    } if (loadedRecipes.vegeterian) {
      tags.push('Veveterian 🥗')
    }
    return tags.map(tag => <h5> {tag} </h5>)
  }

  function UsedIngredients() {
    if (props.recipes[index].usedIngredients.length === 0) {
      return <h4> </h4>
    }
    const usedIngredients = props.recipes[index].usedIngredients;

    return (
      usedIngredients.map(usedI =>
        < React.Fragment>
          <p> {usedI.name} {usedI.amount} {usedI.unit}</p>
        </React.Fragment>
      ))
  };

  function MissedIngredients() {
    if (props.recipes[index].missedIngredients.length === 0) {
      return <h4> </h4>
    }

    const missedIngredients = props.recipes[index].missedIngredients;
    
    return (
    missedIngredients.map(missedI =>
      < React.Fragment>
        <p> {missedI.name} {missedI.amount} {missedI.unit}</p>
      </React.Fragment>
    ))
  };

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
            {recipesElements}
          </Carousel>
          {props.recipes[index] && <div className="buttons">
            <Col xs="auto"><Button className="reject btn" onClick={onRejectClick}><Icon path={mdiClose} size={1.5} /></Button></Col>
            <Col xs="auto"><Button className="accept btn" onClick={onLikeClick}><Icon path={mdiHeartOutline} size={1.3} /></Button></Col>
          </div>}
        </Col>
        <Col className="ingredients" xs={4}>
          {props.recipes[index] && <h4> Preparation time: {props.recipes[index]["readyInMinutes"]} minutes</h4>}
          {props.recipes[index] && < SpecialTags/>}
          {props.recipes[index] && 
          <>
          <h5>Used Leftovers</h5>
          < UsedIngredients />
          </>}
          {props.recipes[index] &&
          <>
          <h5>Missing Ingredients</h5>
          < MissedIngredients />
          </>}
        </Col>
      </Row>
    </Container>
  )
}

export default ReceiptCarousel;
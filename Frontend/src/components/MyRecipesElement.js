import "./MyRecipesElement.css";
import { useContext } from 'react';
import { userRecipesContext } from "../providers/UsersRecipesProvider";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import Icon from '@mdi/react';
import { mdiClose, mdiCircleSmall } from '@mdi/js';

function MyRecipesElement(props) {
  const { deleteUserRecipes, userRecipes } = useContext(userRecipesContext);

  const addToShoppingList = function(name) {
    let existing = localStorage.getItem('shoppingList');
    existing = existing ? JSON.parse(existing) : [];
    existing.push(name)
    localStorage.setItem('shoppingList', JSON.stringify(existing));
  }

  let ingredientElements = [];
  for (const recipeElement of userRecipes) {
    const ingredients = recipeElement.ingredients
    for (const i of ingredients) {
      // if (i.recipeId = props.recipe.recipeId) {
        ingredientElements.push(
        <div className="show-on-hover" onClick={() => addToShoppingList(i.name)}>
          <a className="cart-link">
            <i id="cart-icon"className="fa-solid fa-cart-shopping"></i>
              </a>
              <span className="ingredient"> {i.name} ( {i.amount} {i.unit} )</span>
              </div>
              );
      // }
    }
  }

  let instructionsElements = [];
  if (props.recipe.instructions && props.recipe.instructions.length > 0) {
    const instructionsSteps = props.recipe.instructions.split('   ');
    for (let i = 1; i < instructionsSteps.length; i += 2) {
      instructionsElements.push(
        <div> <b>Step {instructionsSteps[i]}</b>: {instructionsSteps[i + 1]} </div>)
    }
  }

  function SpecialTags() {
    let tags = [];
    for (const recipeElement of userRecipes) {
      if (recipeElement.dairyFree) {
        tags.push('Dairy Free 🐮')
      } if (recipeElement.glutenFree) {
        tags.push('Gluten Free 🍞')
      } if (recipeElement.vegan) {
        tags.push('Vegan 🥬')
      } if (recipeElement.vegetarian) {
        tags.push('Vegetarian 🥗')
      }
      return tags.map(tag => <h5> {tag} </h5>)
    }

  }

  function RecipieToggle() {
    return (
      <Row className='recipeElement' onClick={useAccordionButton()}>
        <Col xs="auto"><img src={props.recipe.image} className="smallPhoto" /></Col>
        <Col xs={8}><h3 className="recipeName">{props.recipe.title}</h3></Col>
      </Row>
    );
  }
  return (
    <Accordion defaultActiveKey="0">
      <div className="recipeContainer">
        <div className="recipeToggle">
          <RecipieToggle />
          <Icon path={mdiClose} size={1.2} className="deleteReceipt" onClick={() => deleteUserRecipes(props.recipe.id)} />
        </div>
        <Accordion.Collapse >
          <Container className="instructions" >
            <Row>
              <Col className="ingredientsCol">
                {ingredientElements}
              </Col>
              <Col>
                <SpecialTags />
              </Col>
            </Row>
            <Row>
              <Col>
                {instructionsElements}
              </Col>
            </Row>
          </Container>
        </Accordion.Collapse>
      </div>
    </Accordion>
  )
}

export default MyRecipesElement;
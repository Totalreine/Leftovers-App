import "./MyRecipesElement.css";
import { useContext, useEffect } from 'react';
import { userRecipesContext } from "../providers/UsersRecipesProvider";
import { ingredientsContext } from "../providers/IngredientsProvider";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import Icon from '@mdi/react';
import { mdiClose, mdiCircleSmall } from '@mdi/js';

function MyRecipesElement(props) {
  const { deleteUserRecipes } = useContext(userRecipesContext);
  const { getIngredients, ingredients } = useContext(ingredientsContext);

  let ingredientElements = [];
  for (const ingredientElement in ingredients) {
    const ingredient = ingredients[ingredientElement];
    ingredientElements.push(<div><Icon path={mdiCircleSmall} size={1} /> {ingredient.name} ( {ingredient.amount} {ingredient.unit} )</div>);
  }

  const instructionsSteps = props.recipe.instructions.split('   ');
  let instructionsElements = [];
  for (let i = 1; i < instructionsSteps.length; i += 2) {
    instructionsElements.push(
      <div> <b>Step {instructionsSteps[i]}</b>: {instructionsSteps[i + 1]} </div>)
  }


  useEffect(() => {
    getIngredients(props.recipe.id)
  }, [])

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
              <Col>
                {ingredientElements}
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
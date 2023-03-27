import "./MyRecipesElement.css"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function MyRecipesElement() {

  function RecipieToggle() {
    return (
      <Row className='recipeElement' onClick={useAccordionButton()}>
      <Col xs="auto"><img src="https://www.allrecipes.com/thmb/yMAQ7gdoDN074lN-hsSb20ZmOUY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4535439-564adcef998c47bebfcb6d9c5aa2a3df.jpg" className="smallPhoto"/></Col>
      <Col xs={10}><h3 className="recipeName">Spinach and Strawberry Salad</h3></Col>
      <Col xs="auto"><Icon path={mdiClose} size={1} className="deleteReceipt"/></Col>
      </Row>
    );
  }
  return (
    <Accordion defaultActiveKey="0">
      <div className="recipeContainer">
        <RecipieToggle />
        <Accordion.Collapse >
        <Container className="instructions">
        <Row>
          <Col>
          <p> ⅔ cup soy sauce
          ¼ cup brown sugar
          ½ teaspoon ground ginger
          1 pinch red pepper flakes, or to taste
          2 tablespoons water
          2 tablespoons cornstarch
          2 teaspoons vegetable oil, or to taste
          3 skinless, boneless chicken breast halves, cut into chunks
          1 onion, sliced
          </p>
          </Col>
        </Row>
        <Row>
          <Col>
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
        </Accordion.Collapse>
     </div>
    </Accordion>
  )
}

export default MyRecipesElement;
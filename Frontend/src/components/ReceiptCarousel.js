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

function ReceiptCarousel() {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onRejectClick = () => {
    ref.current.prev();
  };
  const onLikeClick = () => {
    ref.current.next();
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
        <Carousel.Item>
        <img src="https://www.allrecipes.com/thmb/3AmXs-yYB339MsfGz7RxN9OYzeI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/240708-broccoli-and-chicken-stir-fry-3x4-186-a6ecaccb1fdd4336bc36f5f80415c4cb.jpg" className="mainPicture"/>
        <Carousel.Caption>
          <h3> Broccoli and Chicken Stir-Fry</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="https://www.allrecipes.com/thmb/3AmXs-yYB339MsfGz7RxN9OYzeI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/240708-broccoli-and-chicken-stir-fry-3x4-186-a6ecaccb1fdd4336bc36f5f80415c4cb.jpg" className="mainPicture"/>
        <Carousel.Caption>
          <h3> Broccoli and Chicken Stir-Fry</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="https://www.allrecipes.com/thmb/3AmXs-yYB339MsfGz7RxN9OYzeI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/240708-broccoli-and-chicken-stir-fry-3x4-186-a6ecaccb1fdd4336bc36f5f80415c4cb.jpg" className="mainPicture"/>
        <Carousel.Caption>
          <h3> Broccoli and Chicken Stir-Fry</h3>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <div className="buttons">
        <Col xs="auto"><Button className="reject btn" onClick={onRejectClick}><Icon path={mdiClose} size={1.5} /></Button></Col>
        <Col xs="auto"><Button className="accept btn" onClick={onLikeClick}><Icon path={mdiHeartOutline} size={1.3} /></Button></Col>
        </div>
        </Col>
        <Col className="ingredients" xs={4}>
          <h4> Preparation time: 30 min </h4>
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
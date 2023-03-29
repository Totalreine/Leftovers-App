import React, { useState } from 'react';
import "./Filter.css"

import Dropdown from 'react-bootstrap/Dropdown';
import Icon from '@mdi/react';
import { mdiFilterOutline } from '@mdi/js';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div>
  <Icon className="filterIcon" path={mdiFilterOutline} size={1.5}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
    {children}
  </div>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form>
          <Container>
            <Row>
              <Col xs="auto">
                <div>Diet:</div>
                <Form.Check type={"checkbox"} label={"Gluten Free"} value="gluten free"/>
                <Form.Check type={"checkbox"} label={"Vegetarian"} value="vegetarian"/>
                <Form.Check type={"checkbox"} label={"Vegan"} value="vegan"/>
                <Form.Check type={"checkbox"} label={"Paleo"} value="paleo"/>
                <Form.Check type={"checkbox"} label={"Ketogenic"} value="ketogenic"/>
              </Col>
              <Col xs="auto">
                <div>Mealtype:</div>
                <Form.Check type={"checkbox"} label={"Breakfast"} value="breakfast"/>
                <Form.Check type={"checkbox"} label={"Main Course"} value="main course"/>
                <Form.Check type={"checkbox"} label={"Side Dish"} value="side dish"/>
                <Form.Check type={"checkbox"} label={"Snack"} value="snack"/>
                <Form.Check type={"checkbox"} label={"Drink"} value="drink"/>
              </Col>
              <Col xs="auto">
                <div>Intolerances:</div>
                <Form.Check type={"checkbox"} label={"Gluten"} value="gluten"/>
                <Form.Check type={"checkbox"} label={"Dairy"} value="dairy"/>
                <Form.Check type={"checkbox"} label={"Peanut"} value="peanut"/>
                <Form.Check type={"checkbox"} label={"Seafood"} value="seafood"/>
              </Col>
            </Row>
          </Container>
        </Form>
        <ul className="list-unsty">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul> 
      </div>
    );
  },
);

function Filter() {
  return (
    <Dropdown align={"end"}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />

      <Dropdown.Menu align="end" as={CustomMenu} className='filterForm'>
      </Dropdown.Menu>
    </Dropdown>
  ) 
}

export default Filter;
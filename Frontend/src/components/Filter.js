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
                <Form.Check type={"checkbox"} label={"Vegan"}/>
                <Form.Check type={"checkbox"} label={"Vegeterian"}/>
                <Form.Check type={"checkbox"} label={"Keto"}/>
                <Form.Check type={"checkbox"} label={"Paleo"}/>
              </Col>
              <Col xs="auto">
                <div>Allergies:</div>
                <Form.Check type={"checkbox"} label={"Nuts"}/>
                <Form.Check type={"checkbox"} label={"Seafood"}/>
                <Form.Check type={"checkbox"} label={"Dairy"}/>
                <Form.Check type={"checkbox"} label={"Eggs"}/>
              </Col>
              <Col xs="auto">
                <div>Macroc:</div>
                <Form.Check type={"checkbox"} label={"High protein"}/>
                <Form.Check type={"checkbox"} label={"Low carbs"}/>
                <Form.Check type={"checkbox"} label={"Low fat"}/>
                <Form.Check type={"checkbox"} label={"Low Sodium"}/>
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
import "./SideBar.css"
import LeftoverElement from "./LeftoverElement"
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

import Icon from '@mdi/react';
import { mdiPlus, mdiCheck } from '@mdi/js';

import { useContext } from 'react';
import { leftoversContext } from '../providers/LeftoversProvider';

function SideBar() {
  const [open, setOpen] = useState(false);
  const [leftover, setLeftover] = useState("");
  const { addLeftover, leftovers } = useContext(leftoversContext);

  const onSubmit = function(event) {
    event.preventDefault();
    leftover && addLeftover(leftover);
    setLeftover("");
  }

  let leftoverElements = [];
  for (let leftoverElement in leftovers) {
    const leftover = leftovers[leftoverElement];
    leftoverElements.push(<LeftoverElement key={leftover} leftover={leftover} />);
  }


  return (
    <div className="sideBar">
      <div className="myLeftovers element">
        <span className="dot"></span>
        <span className="category">My Leftovers</span>
        <Icon path={mdiPlus} size={1.3} className="plusSign" 
        role="button"
        onClick={() => setOpen(!open)}
        aria-controls="collapse-form"
        aria-expanded={open}/>
      </div>
      <Collapse in={open}>
        <div className="newItem" id="collapse-form">
          <form autoComplete="off" onSubmit={onSubmit}>
            <input
              className="inputLeftover"
              placeholder="Add new leftover"
              name="name"
              type="text"
              value={leftover}
              onChange={event => setLeftover(event.target.value)}
            />
          </form>
          <Icon path={mdiCheck} size={1} onClick={onSubmit}/>
        </div>
      </Collapse>
      <ul className="leftoversList">
        { leftoverElements }
      </ul>
      <div className="myRecipies element">
        <span className="dot"></span>
        <span className="sideBarCategory">My Recipes</span>
      </div>
    </div>
  );
}

export default SideBar;
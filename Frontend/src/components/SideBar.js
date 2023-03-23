import "./SideBar.css"
import LeftoverElement from "./LeftoverElement"
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

import Icon from '@mdi/react';
import { mdiPlus, mdiCheck } from '@mdi/js';

function SideBar() {
  const [open, setOpen] = useState(false);

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
          <form autoComplete="off" onSubmit={event => event.preventDefault()}>
            <input
              className="inputLeftover"
              name="name"
              type="text"
            />
          </form>
          <Icon path={mdiCheck} size={1} />
        </div>
      </Collapse>
      <ul className="leftoversList">
          <LeftoverElement />
      </ul>
      <div className="myRecipies element">
        <span className="dot"></span>
        <span className="sideBarCategory">My Recipes</span>
      </div>
    </div>
  );
}

export default SideBar;
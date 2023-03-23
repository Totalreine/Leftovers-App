import { useState } from "react";
import {Container} from 'react-bootstrap';
import Sidebar from './Sidebar';
import Navbar from 'react-bootstrap/Navbar';
import Collapse from 'react-bootstrap/Collapse';

function ContainerOutsideExample() {
  const [isVisible, setVisibility] = useState(false);
  return (
    <Container fluid>
      <Navbar expand="lg" variant="light" className="nav-color" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" bsStyle="default" style={{ color: "white", width: "20%" }}>
            <div className='logo-icon-div'>
              <div className="icon-div">
                <i class="fa-solid fa-bars"  onClick={() => setVisibility(!isVisible)}></i>
              </div>
              <div className='logo-div'>
                <img src='./logo.png' alt="bug" height={25} />
              </div>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
        <Sidebar isVisible={isVisible} />
    </Container>
  );
}

export default ContainerOutsideExample;
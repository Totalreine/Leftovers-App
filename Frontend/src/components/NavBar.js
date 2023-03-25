import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import UserSettings from "./UserSettings"
import { Link } from "react-router-dom";
import {routes} from '../routes'

function NavBar() {
  return (
    <Navbar>
      <div className="logo-link-div">
      <Navbar.Brand href="#home">Left🥘vers</Navbar.Brand>
    <div className="nav-links">
      {routes.map((routeObj) => (
         <Link id="links" to={routeObj.route}>{routeObj.name}</Link>
        ))}
        </div>
        </div>
      <Nav className="userLinks">
     
      <p className="text-center mt-4 mb-4">Welcome back, User</p>
      <Nav.Link className="NavLogOut"><UserSettings /></Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
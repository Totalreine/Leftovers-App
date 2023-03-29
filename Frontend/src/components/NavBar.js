import "./NavBar.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import UserSettings from "./UserSettings";

function NavBar() {
  let data = JSON.parse(window.localStorage.getItem("user_info")).name;

  if (!data) {
    data = "User";
  }
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Left🥘vers</Navbar.Brand>
        <Nav className="userLinks">
          <p className="text-center mt-4 mb-4">Welcome back, {data}</p>
          <Nav.Link className="NavLogOut">
            <UserSettings />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

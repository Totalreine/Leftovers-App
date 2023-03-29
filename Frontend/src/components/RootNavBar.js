import "./RootNavBar.css"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function RootNavBar() {
  return (
    <Navbar>
      <Container>
      <Navbar.Brand href="#home">Left🥘vers</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default RootNavBar;
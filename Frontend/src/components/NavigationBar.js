import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" className="nav-color" fixed="top">
        <Container>
          <Navbar.Brand href="#">LeftOvers</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;
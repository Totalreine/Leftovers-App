import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" className="nav-color" fixed="top">
        <Container>
          <Navbar.Brand href="#" bsStyle="default" style={{ color: "white" }}>
            <div className='logo-div'>
              <img src='./logo.png' alt="bug" height={25} />
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {
  return (
    <Container fluid>
      <Navbar expand="lg" variant="light" className="nav-color" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" bsStyle="default" style={{ color: "white", width:"20%" }}>
            <div className='logo-icon-div'>
            <div className="icon-div">
            <i class="fa-solid fa-bars"></i>
            </div>
            <div className='logo-div'>
              <img src='./logo.png' alt="bug" height={25} />
            </div>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;
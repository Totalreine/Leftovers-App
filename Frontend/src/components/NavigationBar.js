import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from './Sidebar';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {

  return (
    <Container fluid>
      <Navbar expand="lg" variant="light" className="nav-color" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" bsStyle="default" style={{ color: "white", width: "20%" }}>
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
      <Row noGutters style={{ height: "100%", width:"25%", position:"absolute" }}>
        <Col xs={6} md={3} style={{ background: "#9E9BF2", height:"100%", width: "100%" }}>
          <Sidebar />
        </Col>
      </Row>

    </Container>
  );
}

export default ContainerOutsideExample;
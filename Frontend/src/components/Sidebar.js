import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../sidebar.css'
import Fade from 'react-bootstrap/Fade';
function Sidebar(props) {
  return (
    <Fade in ={props.isVisible}  dimension="width">
      <Container fluid style={{ paddingLeft: "0" }}>
        <Row style={{ height: "100%", width: "25%", position: "absolute" }}>
          <Col xs={6} md={3} style={{ background: "#9E9BF2", height: "100%", width: "100%" }}>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ background: "#9E9BF2" }}>
              <Link to="/home" className="menu-link">Home</Link>
              </ListGroup.Item>
              <ListGroup.Item style={{ background: "#9E9BF2" }}>
              <Link to="/myrecipes" className="menu-link">MyRecipes</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      </Fade>
  );
}

export default Sidebar;
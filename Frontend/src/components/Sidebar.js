import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade';
function Sidebar(props) {
  return (
    <Fade in ={props.isVisible}  dimension="width">
      <Container fluid style={{ paddingLeft: "0" }}>
        <Row style={{ height: "100%", width: "25%", position: "absolute" }}>
          <Col xs={6} md={3} style={{ background: "#9E9BF2", height: "100%", width: "100%" }}>
            <ListGroup variant="flush">
              <ListGroup.Item href="/home" style={{ background: "#9E9BF2" }}>
                Home
              </ListGroup.Item>
              <ListGroup.Item href="/myrecipes" style={{ background: "#9E9BF2" }}>
                MyRecipes
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      </Fade>
  );
}

export default Sidebar;
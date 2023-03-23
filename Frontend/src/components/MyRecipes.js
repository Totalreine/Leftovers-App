import {Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";

function MyRecipes() {
  return (
    <Container fluid= {true} style={{width:"100%", height: "100%"}}>
      <Row noGutters style={{height: "100%"}}>
        <Col  xs={6} md= {3} style={{background:"#9E9BF2"}}>
          <Sidebar/>
        </Col>
        <Col>
        </Col>
      </Row>
      </Container>
 
  );
}
export default MyRecipes;
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import './ShoppingList.css'


function ShoppingList() {
  return (
    <div className="shopping-list-div">
      <NavBar/>
      <Row> 
        <Col md={2}>
        <SideBar />
        </Col>
        <Col md={10}>
        </Col>
      </Row>
   

    </div>
    
  )
}

export default ShoppingList;
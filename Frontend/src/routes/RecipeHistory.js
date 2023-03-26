import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyRecipesElement from "../components/MyRecipesElement";
import './Recipe-History.css'


function RecipeHistory() {
  return (
    <div className="recipe-history-div">
      <NavBar/>
      <Row> 
        <Col md={2}>
        <SideBar style={{height:"100%", width:"100%"}}/>
        </Col>
        <Col md={10}>
        <MyRecipesElement style={{width:'100%'}}/>
        <MyRecipesElement style={{width:'100%'}}/>
        </Col>
      </Row>
   

    </div>
    
  )
}

export default RecipeHistory;
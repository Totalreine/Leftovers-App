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
      <NavBar />
      <main className="main">
        <SideBar />
        <section className="content col-9">
        <Row>
          <Col>
            <MyRecipesElement />
            <MyRecipesElement />
          </Col>
        </Row>
        </section>
      </main>
    </div>

  )
}

export default RecipeHistory;
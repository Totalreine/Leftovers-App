import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import './ShoppingList.css';
import { Fragment } from "react";
import ShoppingListComp from "../components/ShoppingListComp";


function ShoppingList() {
  return (
    <Fragment>
      <NavBar />
      <main className="main">
        <SideBar />
        <section className="content col-9">
          <ShoppingListComp />
        </section>
      </main>
    </Fragment>
  )
}

export default ShoppingList;
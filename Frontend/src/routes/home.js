import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ReceiptCarousel from "../components/ReceiptCarousel";
import MyRecipes from "../components/MyRecipes"
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <NavBar />
      <main className="main">
        <SideBar />
        <section className="content">
          <header className="carousel">
            <ReceiptCarousel />
          </header>
          <section className="myRecipes">
            <MyRecipes />
          </section>
        </section>
      </main>
    </Fragment>
  );
}

export default Home;
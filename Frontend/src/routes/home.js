import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ReceiptCarousel from "../components/ReceiptCarousel";
import ShowSpinner from "../components/Spinner";
import { Fragment, useContext, useEffect, useState } from "react";

import { leftoversContext } from '../providers/LeftoversProvider';
import {recipesContext} from "../providers/RecipesProvider";

function Home() {
  const { leftovers } = useContext(leftoversContext);
  const { recipes, addRecipes } = useContext(recipesContext);

  const [showSpinner, setShowSpinner] = useState(true);

  let leftoversNames = Object.keys(leftovers);
  const formattedLeftovers = leftoversNames.join();

  useEffect(() => {
    setShowSpinner(true);
    addRecipes({"ingredients": formattedLeftovers})
    .finally(() => {
      setShowSpinner(false)
    });      
  }, [leftovers])

  return (
    <Fragment>
      <NavBar />
      <main className="main">
        <SideBar />
        <section className="content col-9">
          <header className="carousel">
            { showSpinner ? <ShowSpinner /> : <ReceiptCarousel recipes={recipes} />}
          </header>
        </section>
      </main>
    </Fragment>
  );
}

export default Home;
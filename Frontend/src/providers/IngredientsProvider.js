import { createContext, useState } from 'react';
import axios from "axios";

export const ingredientsContext = createContext();

export default function IngredientsProvider(props) {
  const [ingredients, setIngredients] = useState([]);

  function getIngredients(recipeId) {
    return axios.get(`/ingredients`, { recipeId } )
      .then((all) => {
        setIngredients(() => all.data);
      });
  }

  const ingredientsData = { getIngredients, ingredients };

  return (
    <ingredientsContext.Provider value={ingredientsData}>
      {props.children}
    </ingredientsContext.Provider>
  );
};
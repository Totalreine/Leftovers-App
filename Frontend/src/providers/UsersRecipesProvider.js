import { createContext, useState } from 'react';
import axios from "axios";

export const userRecipesContext = createContext();


export default function UserRecipesProvider(props) {
  const [userRecipes, setUserRecipes] = useState([]);

  function addUserRecipes(params) {
    return axios.post(`/savedrecipes`, params)
      .then((all) => {
        setUserRecipes(() => all.data);
      });
  };

  function getSavedRecipes() {
    return axios.get(`/savedrecipes`)
      .then((all) => {
        console.log("all", all)
        console.log("all.data", all.data)
        setUserRecipes(() => all.data);
      });
  }

  function deleteUserRecipes(recipeId) {
    return axios.delete(`/savedrecipes/${recipeId}`, { "id": recipeId })
      .then(getSavedRecipes);
  };

  const userRecipesData = { addUserRecipes, deleteUserRecipes, getSavedRecipes, userRecipes };

  return (
    <userRecipesContext.Provider value={userRecipesData}>
      {props.children}
    </userRecipesContext.Provider>
  );
};
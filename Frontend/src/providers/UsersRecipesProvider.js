import { createContext, useState } from 'react';
import axios from "axios";

export const userRecipesContext = createContext();


export default function UserRecipesProvider(props) {
  const [userRecipes, setUserRecipes] = useState([]);

  function addUserRecipes(params) {
    return axios.post(`/save`, params)
      .then((all) => {
        setUserRecipes(() => all.data);
      });
  };

  function getSavedRecipes(params) {
    return axios.get(`/save`, { params })
      .then((all) => {
        setUserRecipes(() => all.data);
      });
  }

  function deleteUserRecipes(recipeId) {
    return axios.delete(`/save/${recipeId.id}`, recipeId)
      .then(() => {
        setUserRecipes(prev => {
          let updatedState;
          for (let i = 0; i <= prev.length; i++) {
            if (i["id"] === recipeId.id) {
              updatedState = userRecipes.splice(i, 1)
            }
          }
          return updatedState;
        });
      })
  }

  const userRecipesData = { addUserRecipes, deleteUserRecipes, getSavedRecipes, userRecipes };

  return (
    <userRecipesContext.Provider value={userRecipesData}>
      {props.children}
    </userRecipesContext.Provider>
  );
};
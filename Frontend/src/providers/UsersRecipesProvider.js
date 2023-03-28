import { createContext, useState } from 'react';

export const userRecipesContext = createContext();


export default function UserRecipesProvider(props) {
  const [userRecipes, setUserRecipes] = useState([]);

  const addUserRecipes = function(recipe) {
    setUserRecipes( prev => { 
      return prev.push(recipe)
  });
  };
  
  const deleteUserRecipes = function(recipeId) {
    setUserRecipes( prev => {
      let updatedState;
      for (let i = 0; i <= prev.length; i++) {
        if (i["id"] === recipeId) {
          updatedState = userRecipes.splice(i, 1)
        }
      }
      return updatedState;
    });
  };

  const userRecipesData = { addUserRecipes, deleteUserRecipes, userRecipes };

  return (
    <userRecipesContext.Provider value={userRecipesData}>
      {props.children}
    </userRecipesContext.Provider>
  );
};
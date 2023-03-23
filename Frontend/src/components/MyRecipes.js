import "./MyRecipes.css"

import MyRecipesElement from './MyRecipesElement';

function MyRecipes() {
  return (
    <>
      <h3 className='banner'>My Recipes</h3>
      <MyRecipesElement />
      <MyRecipesElement />
    </>
  )
}

export default MyRecipes;
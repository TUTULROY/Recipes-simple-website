import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

import PropTypes from 'prop-types';

    const Recipes = ({handleAddToSideBar}) =>{
const [recipes, setRecipes] = useState([]);


useEffect(()=> {

    fetch('recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
}, [])

    return(

<div className="lg:grid grid-cols-2 gap-4 items-center">


{
    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}
       
       handleAddToSideBar={handleAddToSideBar}
    ></Recipe>)
}

</div>

    )
}

Recipes.propTypes = {
    handleAddToSideBar: PropTypes.func
}

export default Recipes;
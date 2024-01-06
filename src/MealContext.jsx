import { createContext, useState } from "react";

import { fetchRecipebyFood } from "./utils/api";


export const RecipeContext = createContext({
    items: [],
    addOneToPlanner: () => {},
removeOneFromPlanner: () => {},
})

export function RecipeProvider({children}){
    const[recipeArray, setRecipeArray]= useState([])
    const[mealArray, setMealArray]=useState([])

    function getRecipes(food){
        fetchRecipebyFood(food).then((recipes)=>{
            setRecipeArray(recipes)
            return recipes;
        })
    }
    function addOneToPlanner(name, ingredientLines, url,day){
        const updatedArray = [
            ...mealArray,

            {
                name:name,
                ingredientLines:ingredientLines,
                url:url,
                day:day
            }];
        
        const map = {'Monday':1, 'Tuesday':2, 'Wednesday':3,'Thursday':4, 'Friday':5,'Saturday':6,'Sunday':7}
        updatedArray.sort((a,b) =>{
            return map[a.day] - map[b.day]
        });
        setMealArray(updatedArray);
console.log("sorted array", updatedArray)

    };


   
    function removeOneFromPlanner(name){
        setMealArray(
            mealArray =>
            mealArray.filter(currentRecipe =>{
                return currentRecipe.name !== name;
            })
        )
    }

    const contextValue ={
        items:mealArray,
        getRecipes,
        addOneToPlanner,
        removeOneFromPlanner
    }
    return(
        <RecipeContext.Provider value={contextValue}>
            {children}
        </RecipeContext.Provider>
    )


}
export default RecipeProvider;
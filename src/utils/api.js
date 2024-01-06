import axios from "axios"

const recipeApi = axios.create({baseURL:"https://api.edamam.com"})

// app_id = '380d6ffd'
// app_key = '6406f99354143a4935657d53ed3e635c'
// result = requests.get(
// 'https://api.edamam.com/search?q={}&app_id={}&app_key={}


export const fetchRecipebyFood = (foodType) =>{
    return recipeApi.get(`/search?q=${foodType}&app_id=380d6ffd&app_key=6406f99354143a4935657d53ed3e635c`).then((response)=>{
console.log(response.data.hits)
return response.data.hits
    })
}
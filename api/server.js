// build your server here and require it from index.js
const express = require('express')
const Recipes = require('./recipe-model')
const server = express()

server.use(express.json())


server.get('/api/recipe/:id', async (req, res) => {
  const id = req.params.id
  let recipe = await Recipes.getRecipeById(id)
  const steps = await Recipes.getStepsForRecipe(id)
  recipe = {...recipe, "steps": steps}
  console.log(recipe)
  res.json(recipe)
})



server.use('*', (req,res) => {
  res.send('<h1>welcome!</h1>')
})

module.exports = server

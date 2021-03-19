const db = require('.././data/db-config')

const getRecipeById = (id) => {
  return db('recipes')
  .where('recipe_id', id)
}

module.exports = {
  getRecipeById
}
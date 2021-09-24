
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {quantity: 1, ingredient_id: 1, step_id: 1},
        {quantity: 3, ingredient_id: 2, step_id: 1},
        {quantity: 2, ingredient_id: 3, step_id: 4},
        {quantity: 2, ingredient_id: 4, step_id: 4},
        {quantity: 4, ingredient_id: 5, step_id: 5}
      ]);
    });
};

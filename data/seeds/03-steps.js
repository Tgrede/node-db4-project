
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number:1, step_instructions: 'put chicken and buffalo in slow cooker', recipe_id:1},
        {step_number:2, step_instructions: 'drain excess sauce', recipe_id:1},
        {step_number:3, step_instructions: 'shred as thin as you would like', recipe_id:1},
        {step_number:2, step_instructions: 'put salmon on tray with lemon slice on top', recipe_id:2},
        {step_number:1, step_instructions: 'cut garlic for the salmon while oven preheats to 350 degrees', recipe_id:2},
        {step_number:3, step_instructions: 'wrap in foil', recipe_id:2},
        {step_number:4, step_instructions: 'cook for 15 minutes or until tender and flakey', recipe_id:2}
      ]);
    });
};

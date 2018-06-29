
exports.up = function(knex, Promise) {
  return knex.schema.createTable("books",(table)=>{
    table.increments(); // Creates id column
    table.string("title"); // Creates name column as varchar(255)
    table.string("subtitle"); // Creates email column as varchar(255)
    table.string("author");
    table.date("published");
    table.string("publisher");
    table.integer("pages");
    table.text("description"); 
    table.string("website");
    table.boolean("inCart");
    table.integer("price"); // Creates password column as varchar(255)
    table.timestamps(true, true); // Creates created_at and updated_at columns to use as timestamps
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("books");
};

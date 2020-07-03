const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const newTable = migration.createTable('project');

   newTable.addField('id', 'bigint').autoIncrement().primary();
   newTable.addField('name', 'varchar').length(50);
   newTable.addField('description', 'longtext');
   newTable.addField('author_id', 'bigint').foreign('user', 'id');
   newTable.addField('category_id', 'bigint').foreign('projectcategory', 'id');
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('project');
};

module.exports = {
   name: 'create-table-project-4',
    up,
   down,
};
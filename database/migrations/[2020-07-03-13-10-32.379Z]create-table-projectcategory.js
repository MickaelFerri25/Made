const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const newTable = migration.createTable('projectcategory');

   newTable.addField('id', 'bigint').autoIncrement().primary();
   newTable.addField('name', 'varchar').length(50).unique();
   newTable.addField('slug', 'varchar').length(50).unique();
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('projectcategory');
};

module.exports = {
   name: 'create-table-projectcategory-13',
    up,
   down,
};
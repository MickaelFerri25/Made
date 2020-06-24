const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const newTable = migration.createTable('user');

   newTable.addField('id', 'bigint').autoIncrement().primary();
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('user');
};

module.exports = {
   name: 'create-table-user-0',
    up,
   down,
};
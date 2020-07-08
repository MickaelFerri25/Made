const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const newTable = migration.createTable('user');

   newTable.addField('id', 'bigint').autoIncrement().primary();
   newTable.addField('pseudo', 'varchar').length(50).unique();
   newTable.addField('email', 'varchar').length(50).unique();
   newTable.addField('password', 'varchar').length(255);
   newTable.addField('salt', 'varchar').length(255);
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('user');
};

module.exports = {
   name: 'create-table-user-15',
    up,
   down,
};
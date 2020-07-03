const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const alter = migration.alterTable('user');

   alter.removeField('pseudo');
   alter.addField('pseudo', 'varchar').length(50).unique();
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('user');
};

module.exports = {
   name: 'alter-table-user-11',
    up,
   down,
};
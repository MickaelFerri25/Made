const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const alter = migration.alterTable('user');

   alter.addField('pseudo', 'varchar').length(50);
   alter.addField('email', 'varchar').length(50).unique();
   alter.addField('password', 'varchar').length(255);
   alter.addField('salt', 'varchar').length(255);
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('user');
};

module.exports = {
   name: 'alter-table-user-1',
    up,
   down,
};
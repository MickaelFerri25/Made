const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const alter = migration.alterTable('project');

   alter.addField('publishedAt', 'datetime').allowNull();
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('project');
};

module.exports = {
   name: 'alter-table-project-9',
    up,
   down,
};
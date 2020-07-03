const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const alter = migration.alterTable('project');

   alter.addField('isPublished', 'boolean');
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('project');
};

module.exports = {
   name: 'alter-table-project-8',
    up,
   down,
};
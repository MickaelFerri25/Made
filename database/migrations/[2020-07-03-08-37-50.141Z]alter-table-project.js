const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const alter = migration.alterTable('project');

   alter.addField('picture', 'varchar').length(50);
   alter.addField('designLink', 'varchar').length(255).allowNull();
   alter.addField('rules', 'longtext');
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('project');
};

module.exports = {
   name: 'alter-table-project-7',
    up,
   down,
};
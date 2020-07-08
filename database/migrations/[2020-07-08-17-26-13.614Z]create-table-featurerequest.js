const Migration = require('@smallprod/models').Migration;

 /**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const newTable = migration.createTable('featurerequest');

   newTable.addField('id', 'bigint').autoIncrement().primary();
   newTable.addField('message', 'longtext');
   newTable.addField('publishedAt', 'datetime');
   newTable.addField('author_id', 'bigint').foreign('user', 'id');
};

/*
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.dropTable('featurerequest');
};

module.exports = {
   name: 'create-table-featurerequest-16',
    up,
   down,
};
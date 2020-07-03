const Migration = require('@smallprod/models').Migration;

/**
 *
 * @param {Migration} migration
 */
const up = (migration) => {
    const seedTable = migration.seedTable('projectcategory');
    seedTable.addRow().add('name', 'Frontend').add('slug', 'front-end');
    seedTable.addRow().add('name', 'Backend').add('slug', 'back-end');
    seedTable.addRow().add('name', 'Fullstack').add('slug', 'fullstack');
};

/**
 * @param {Migration} migration
 */
const down = (migration) => {
    migration.seedTable('projectcategory').clearTable();
};

module.exports = {
    name: 'seed-table-projectcategory-5',
    up,
    down,
};
const MigrationManager = require('@smallprod/models').MigrationManager;
const DbManager = require('@smallprod/models').DbManager;

const command = process.argv[2];
const targetMigration = process.argv[3];

(async() => {
    const dbManager = DbManager.get();
    const config = require('../config.json');
    dbManager.setConfig({ migrationPath: './database/migrations' });
    await dbManager.add(
        'mariadb',
        config.database.host,
        config.database.port,
        config.database.user,
        config.database.password,
        config.database.database,
        '',
        true,
    );

    const manager = new MigrationManager();
    switch (command) {
        case 'migrate':
            {
                await manager.migrate(targetMigration);
                break;
            }
        case 'reset':
            {
                await manager.reset(targetMigration);
                break;
            }
        default:
            {
                console.error('Invalid command');
            }
    }
    process.exit(0);
})();

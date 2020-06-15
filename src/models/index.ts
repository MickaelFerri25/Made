import { DbManager, EntityManager } from '@smallprod/models';

import UserEntity from './entities/user.entity';
import config from '../utils/config.util';

export default async () => {
  const dbManager = DbManager.get();
  dbManager.setConfig({ migrationPath: 'database/migrations' });
  await dbManager.add(
    'mariadb',
    config.database.host,
    config.database.port,
    config.database.user,
    config.database.password,
    config.database.database,
    undefined,
    true,
  );

  EntityManager.registerEntities([UserEntity]);
  await EntityManager.initialize();
};

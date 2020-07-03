import { DbManager, EntityManager } from '@smallprod/models';

import FeatureRequestEntity from './entities/featurerequest.entity';
import ProjectCategoryEntity from './entities/projectcategory.entity';
import ProjectEntity from './entities/project.entity';
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

  EntityManager.registerEntities([ProjectEntity, ProjectCategoryEntity, FeatureRequestEntity, UserEntity]);
  await EntityManager.initialize();
};

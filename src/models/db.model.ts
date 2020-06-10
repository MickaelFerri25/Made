import Model from '@smallprod/models';
import config from '../utils/config.util';
import maria from 'mysql';

export const ConnectDb = async () => {
  const mariaConfig: maria.PoolConfig = {
    database: config.database.database,
    host: config.database.host,
    user: config.database.user,
    port: config.database.port,
    password: config.database.password,
  };
  await MariaModel.GetModel().setPool(mariaConfig);
};

export default class MariaModel extends Model.Maria.default {
  static singleton: MariaModel | null = null;

  static GetModel = () => {
    if (!MariaModel.singleton) {
      MariaModel.singleton = new MariaModel();
    }
    return MariaModel.singleton;
  };

  private constructor() {
    super(true);
  }
}

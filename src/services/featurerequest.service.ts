import FeatureRequestEntity from '../models/entities/featurerequest.entity';
import Service from './_parent.service';
import UserEntity from '../models/entities/user.entity';
import errors from '../errors';

export default class FeatureRequestService extends Service {
  public create = async (message: string, user: UserEntity) => {
    user = await UserEntity.findById(user.id);
    if (!user) {
      return this.error(errors.global.Unexpected);
    }
    const request = await new FeatureRequestEntity(message, user).create(this.context);
    if (!request) {
      return this.error(errors.global.Unexpected);
    }
    return this.success({});
  };

  public findAll = async () => {
    return await FeatureRequestEntity.findMany(this.context).sort('publishedAt', 'DESC').exec();
  };
}

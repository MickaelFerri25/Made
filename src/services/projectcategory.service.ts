import Service, { ServiceResult } from './_parent.service';

import { GetAllSuccess } from './results/projectcategory.result';
import ProjectCategoryEntity from '../models/entities/projectcategory.entity';

export default class ProjectCategoryService extends Service {
  public getAll = async (): Promise<ServiceResult<GetAllSuccess>> => {
    const categories = await ProjectCategoryEntity.findMany(this.context).exec();
    return this.success<GetAllSuccess>({ categories });
  };
}

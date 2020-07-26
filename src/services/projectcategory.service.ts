import Service, { ServiceResult } from './_parent.service';

import { GetAllSuccess } from './results/projectcategory.result';
import ProjectCategoryEntity from '../models/entities/projectcategory.entity';

export default class ProjectCategoryService extends Service {
  public getAll = async () => {
    const categories = await ProjectCategoryEntity.findMany(this.context).where('premiumReserved', '=', '0').exec();
    const premiumCategories = await ProjectCategoryEntity.findMany(this.context)
      .where('premiumReserved', '=', '1')
      .exec();
    return { categories, premiumCategories };
  };
}

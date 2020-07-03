import errors, { Error } from '../errors';

import { CreateProjectSuccess } from './results/project.result';
import ProjectCategoryEntity from '../models/entities/projectcategory.entity';
import ProjectEntity from '../models/entities/project.entity';
import Service from './_parent.service';
import UserEntity from '../models/entities/user.entity';

export default class ProjectService extends Service {
  public create = async (name: string, description: string, categoryId: number, user: UserEntity) => {
    const resErrors: Error[] = [];
    // Check if the name is already used
    const checkProjectName = await ProjectEntity.findOne(this.context).where('name', '=', name).exec();
    if (checkProjectName) {
      resErrors.push(errors.project.NameAlreadyUsed);
    }
    // Find the category
    const category = await ProjectCategoryEntity.findById(categoryId);
    if (!category) {
      resErrors.push(errors.project.CategoryNotFound);
    }
    if (resErrors.length) return this.errors(resErrors);
    // Create the project
    const project = new ProjectEntity(name, description, user, category);
    const newProject = await project.create();
    if (!newProject) return this.errors([errors.global.Unexpected]);
    return this.success<CreateProjectSuccess>({ project: newProject });
  };
}

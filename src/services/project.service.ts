import { CreateProjectSuccess, PublishProjectSuccess } from './results/project.result';
import errors, { Error } from '../errors';

import ProjectCategoryEntity from '../models/entities/projectcategory.entity';
import ProjectEntity from '../models/entities/project.entity';
import Service from './_parent.service';
import UserEntity from '../models/entities/user.entity';

export default class ProjectService extends Service {
  public create = async (
    name: string,
    description: string,
    categoryId: number,
    designLink: string,
    picturePath: string,
    user: UserEntity,
  ) => {
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

    // Check if the design link is correct
    if (!designLink.startsWith('https://www.figma.com/file/')) {
      resErrors.push(errors.project.DesignLinkIncorrect);
    }

    if (resErrors.length) return this.errors(resErrors);
    user = await UserEntity.findById(user.id);
    if (!user) return this.errors([errors.global.Unexpected]);
    // Create the project
    const project = new ProjectEntity(name, description, picturePath, designLink, user, category, '');
    const newProject = await project.create();
    if (!newProject) return this.errors([errors.global.Unexpected]);
    return this.success<CreateProjectSuccess>({ project: newProject });
  };

  public publish = async (rules: string, project: ProjectEntity) => {
    try {
      project.rules = rules;
      project.isPublished = true;
      await project.update();
      return this.success<PublishProjectSuccess>({ project });
    } catch (err) {
      return this.error(errors.global.Unexpected);
    }
  };
}

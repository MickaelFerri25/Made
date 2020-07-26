import { CreateProjectSuccess, PublishProjectSuccess } from './results/project.result';
import errors, { Error } from '../errors';

import ProjectCategoryEntity from '../models/entities/projectcategory.entity';
import ProjectEntity from '../models/entities/project.entity';
import Service from './_parent.service';
import UserEntity from '../models/entities/user.entity';

export default class ProjectService extends Service {
  public create = async (
    name: string,
    level: string,
    categoryId: string,
    type: string,
    description: string,
    picturePath: string,
    designLink: string,
    codesandboxLink: string,
    githubLink: string,
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
    if (designLink && !designLink.startsWith('https://www.figma.com/')) {
      resErrors.push(errors.project.DesignLinkIncorrect);
    }

    if (codesandboxLink && !codesandboxLink.startsWith('https://codesandbox.io/')) {
      resErrors.push(errors.project.CodesandboxLinkIncorrect);
    }

    if (githubLink && !githubLink.startsWith('https://github.com/')) {
      resErrors.push(errors.project.GithubLinkIncorrect);
    }

    if (level !== '1' && level !== '2' && level !== '3') {
      resErrors.push(errors.project.LevelNotFound);
    }

    if (type !== '1' && type !== '2') {
      resErrors.push(errors.project.TypeNotFound);
    }

    if (resErrors.length) return this.errors(resErrors);
    user = await UserEntity.findById(user.id);
    if (!user) return this.errors([errors.global.Unexpected]);
    // Create the project
    const project = new ProjectEntity(
      name,
      description,
      picturePath,
      designLink,
      user,
      category,
      '',
      parseInt(level, 10),
      parseInt(type, 10),
      codesandboxLink,
      githubLink,
    );
    const newProject = await project.create();
    if (!newProject) return this.errors([errors.global.Unexpected]);
    return this.success<CreateProjectSuccess>({ project: newProject });
  };

  public publish = async (rules: string, project: ProjectEntity) => {
    try {
      project.rules = rules;
      project.isPublished = true;
      project.publishedAt = new Date();
      await project.update();
      return this.success<PublishProjectSuccess>({ project });
    } catch (err) {
      return this.error(errors.global.Unexpected);
    }
  };

  public findByCategory = async (category: ProjectCategoryEntity, page: number, level: string | null) => {
    const query = ProjectEntity.findMany(this.context)
      .where('category_id', '=', category.id)
      .and()
      .where('isPublished', '=', 1)
      .sort('publishedAt', 'DESC');
    /*.limit(6, (page - 1) * 6)*/
    if (level) {
      query.and().where('level', '=', level);
    }
    const projects = await query.exec();
    return projects;
  };
}

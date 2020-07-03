import ProjectEntity from '../../models/entities/project.entity';

export interface CreateProjectSuccess {
  project: ProjectEntity;
}

export interface PublishProjectSuccess {
  project: ProjectEntity;
}

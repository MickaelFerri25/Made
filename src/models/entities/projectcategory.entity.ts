import {
  AutoCreateNUpdate,
  AutoIncrement,
  BigInt,
  Entity,
  Id,
  OneToMany,
  PrimaryKey,
  Table,
  Unique,
  Varchar,
} from '@smallprod/models';

import ProjectEntity from './project.entity';

@Table('project-category')
@AutoCreateNUpdate()
export default class ProjectCategoryEntity extends Entity {
  @Id()
  @PrimaryKey()
  @BigInt()
  @AutoIncrement()
  public id: number;

  @Varchar(50)
  @Unique()
  public name: string;

  @Varchar(50)
  @Unique()
  public slug: string;

  @OneToMany('project', false)
  public projects: ProjectEntity[];

  constructor(name: string, slug: string) {
    super();
    this.name = name;
    this.slug = slug;
  }
}

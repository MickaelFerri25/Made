import {
  AutoCreateNUpdate,
  AutoIncrement,
  BigInt,
  Entity,
  Id,
  LongText,
  ManyToOne,
  PrimaryKey,
  Table,
  Varchar,
} from '@smallprod/models';

import ProjectCategoryEntity from './projectcategory.entity';
import UserEntity from './user.entity';

@Table('project')
@AutoCreateNUpdate()
export default class ProjectEntity extends Entity {
  @Id()
  @PrimaryKey()
  @AutoIncrement()
  @BigInt()
  public id: number;

  @Varchar(50)
  public name: string;

  @ManyToOne('user', true)
  public author: UserEntity;

  @LongText()
  public description: string;

  @ManyToOne('projectcategory', true)
  public category: ProjectCategoryEntity;

  constructor(name: string, description: string, author: UserEntity, category: ProjectCategoryEntity) {
    super();
    this.name = name;
    this.description = description;
    this.author = author;
    this.category = category;
  }
}

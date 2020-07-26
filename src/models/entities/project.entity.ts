import {
  AllowNull,
  AutoCreateNUpdate,
  AutoIncrement,
  BigInt,
  Bool,
  DateTime,
  Entity,
  Id,
  LongText,
  ManyToOne,
  PrimaryKey,
  SmallInt,
  Table,
  Varchar,
} from '@smallprod/models';

import { Context } from '@smallprod/models/dist/entities/entitymanager';
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

  @Varchar(50)
  public picture: string;

  @Varchar(255)
  @AllowNull()
  public designLink: string;

  @Varchar(255)
  @AllowNull()
  public codesandboxLink: string;

  @Varchar(255)
  @AllowNull()
  public githubLink: string;

  @LongText()
  public rules: string;

  @ManyToOne('projectcategory', true)
  public category: ProjectCategoryEntity;

  @Bool()
  public isPublished = false;

  @AllowNull()
  @DateTime()
  public publishedAt: Date | null = null;

  @SmallInt()
  public level = 1;

  @SmallInt()
  public type = 1;

  constructor(
    name: string,
    description: string,
    picture: string,
    designLink: string,
    author: UserEntity,
    category: ProjectCategoryEntity,
    rules: string,
    level: number,
    type: number,
    codesandboxLink: string,
    githubLink: string,
  ) {
    super();
    this.name = name;
    this.description = description;
    this.picture = picture;
    this.designLink = designLink;
    this.author = author;
    this.category = category;
    this.rules = rules;
    this.level = level;
    this.type = type;
    this.codesandboxLink = codesandboxLink;
    this.githubLink = githubLink;
  }
}

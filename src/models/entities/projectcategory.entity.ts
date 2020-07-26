import {
  AutoCreateNUpdate,
  AutoIncrement,
  BigInt,
  Bool,
  Default,
  Entity,
  Id,
  OneToMany,
  PrimaryKey,
  Table,
  Unique,
  Varchar,
} from '@smallprod/models';

import ProjectEntity from './project.entity';

@Table('projectcategory')
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

  @Varchar(255)
  public description: string;

  @Varchar(50)
  @Unique()
  public slug: string;

  @Bool()
  @Default('0')
  public premiumReserved: boolean;

  @OneToMany('project', false)
  public projects: ProjectEntity[];

  constructor(name: string, slug: string, description: string, premiumReserved: boolean) {
    super();
    this.name = name;
    this.slug = slug;
    this.description = description;
    this.premiumReserved = premiumReserved;
  }
}

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

  // ! TODO handle the type

  @Varchar(255)
  public image: string; // ! Maybe not like this only with id
}

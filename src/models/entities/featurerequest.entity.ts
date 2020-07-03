import {
  AutoCreateNUpdate,
  AutoIncrement,
  BigInt,
  DateTime,
  Entity,
  Id,
  LongText,
  ManyToOne,
  PrimaryKey,
  Table,
} from '@smallprod/models';

import UserEntity from './user.entity';

@Table('featurerequest')
@AutoCreateNUpdate()
export default class FeatureRequestEntity extends Entity {
  @AutoIncrement()
  @Id()
  @PrimaryKey()
  @BigInt()
  public id = 0;

  @LongText()
  public message: string;

  @ManyToOne('user', true)
  public author: UserEntity;

  @DateTime()
  public publishedAt: Date;

  constructor(message: string, author: UserEntity) {
    super();
    this.message = message;
    this.author = author;
    this.publishedAt = new Date();
  }
}

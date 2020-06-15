import {
  AutoCreateNUpdate,
  AutoIncrement,
  BigInt,
  Entity,
  Id,
  PrimaryKey,
  Table,
  Unique,
  Varchar,
} from '@smallprod/models';

import hashUtil from '../../utils/hash.util';

@Table('user')
@AutoCreateNUpdate()
export default class UserEntity extends Entity {
  @Id()
  @PrimaryKey()
  @BigInt()
  @AutoIncrement()
  public id: string;

  @Varchar(50)
  public pseudo: string;

  @Varchar(50)
  @Unique()
  public email: string;

  @Varchar(255)
  public password: string;

  @Varchar(255)
  public salt: string;

  constructor(pseudo: string, email: string, password: string) {
    super();
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
  }

  public hashPassword = (): void => {
    const hashResult = hashUtil.hash(this.password);
    this.password = hashResult.hash;
    this.salt = hashResult.salt;
  };

  public verifPassword = (password: string): boolean => {
    return hashUtil.verifHash(password, this.salt, this.password);
  };
}

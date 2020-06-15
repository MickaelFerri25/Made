import UserEntity from '../../models/entities/user.entity';

export interface CreateAccountSuccess {
  user: UserEntity;
}

export interface LoginSuccess {
  user: UserEntity;
}

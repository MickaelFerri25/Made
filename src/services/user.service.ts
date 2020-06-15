import { CreateAccountSuccess, LoginSuccess } from './results/user.result';
import Service, { ServiceResult } from './_parent.service';

import UserEntity from '../models/entities/user.entity';
import errors from '../errors';

export default class UserService extends Service {
  public createAccount = async (
    pseudo: string,
    email: string,
    password: string,
  ): Promise<ServiceResult | ServiceResult<CreateAccountSuccess>> => {
    email = email.toLowerCase().trim();
    pseudo = pseudo.trim();
    // Test password strength
    if (password.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      return this.error(errors.user.PasswordDontMatchRequirements);
    }
    // Chech if email is already used
    const checkEmailResult = await UserEntity.findOne().where('email', '=', email).exec();
    if (checkEmailResult) {
      return this.error(errors.user.EmailAlreadyUsed);
    }
    const user = new UserEntity(pseudo, email, password);
    user.hashPassword(); // Hash the password
    const newUser = await user.create(); // Create the user
    if (!newUser) {
      return this.error(errors.global.Unexpected);
    }
    return this.success<CreateAccountSuccess>({ user: newUser });
  };

  public login = async (email: string, password: string): Promise<ServiceResult | ServiceResult<LoginSuccess>> => {
    email = email.toLowerCase().trim();
    // Check if a user with this email exists
    const user: UserEntity | null = await UserEntity.findOne().where('email', '=', email).exec();
    if (!user) {
      return this.error(errors.user.IncorrectAuthInfos);
    }
    // Check if the password match
    if (!user.verifPassword(password)) {
      return this.error(errors.user.IncorrectAuthInfos);
    }
    return this.success<LoginSuccess>({ user });
  };
}

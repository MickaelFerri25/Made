import { CreateAccountSuccess, LoginSuccess } from './results/user.result';
import Service, { ServiceErrors, ServiceResult } from './_parent.service';
import errors, { Error } from '../errors';

import UserEntity from '../models/entities/user.entity';

export default class UserService extends Service {
  public createAccount = async (
    pseudo: string,
    email: string,
    password: string,
  ): Promise<ServiceResult<ServiceErrors> | ServiceResult<CreateAccountSuccess>> => {
    email = email.toLowerCase().trim();
    pseudo = pseudo.trim();
    const resErrors: Error[] = [];
    // Test password strength
    if (password.length < 8 || !/^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
      resErrors.push(errors.user.PasswordDontMatchRequirements);
    }
    // Check if email is already used
    const checkEmailResult = await UserEntity.findOne(this.context).where('email', '=', email).exec();
    if (checkEmailResult) {
      resErrors.push(errors.user.EmailAlreadyUsed);
    }
    // Check if pseudo is already used
    const checkPseudoResult = await UserEntity.findOne(this.context).where('pseudo', '=', pseudo).exec();
    if (checkPseudoResult) {
      resErrors.push(errors.user.PseudoAlreadyUsed);
    }
    if (resErrors.length) return this.errors(resErrors);
    const user = new UserEntity(pseudo, email, password);
    user.hashPassword(); // Hash the password
    const newUser = await user.create(undefined, this.context); // Create the user
    if (!newUser) {
      return this.errors([errors.global.Unexpected]);
    }
    return this.success<CreateAccountSuccess>({ user: newUser });
  };

  public login = async (email: string, password: string): Promise<ServiceResult | ServiceResult<LoginSuccess>> => {
    email = email.toLowerCase().trim();
    // Check if a user with this email exists
    const user: UserEntity | null = await UserEntity.findOne(this.context).where('email', '=', email).exec();
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

import { ICreateUser } from '@dkr-web/common/typings';

export interface IRegistrationForm extends ICreateUser {
  confirmationPassword: string;
}

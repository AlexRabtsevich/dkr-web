import { IGender } from './gender';

export enum UserStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
}

export interface IUser {
  uuid: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  gender: IGender;
  status: UserStatus;
}

export interface ICreateUser {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  genderUuid: string;
  password: string;
}

export type UpdateUser = Partial<Omit<ICreateUser, 'password' | 'email'>>;

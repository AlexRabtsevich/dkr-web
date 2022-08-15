import { useMutation, useQuery } from '@apollo/client';

import { CREATE_USER } from '../mutations';
import { ICreateUser, IUser } from '../../common/typings';
import { USER_QUERY } from '../queries';

interface ICreateUserVariables {
  user: ICreateUser;
}

interface IUserResponse {
  user: IUser;
}

export const useCreateUser = () => useMutation<boolean, ICreateUserVariables>(CREATE_USER);

export const useUser = () => useQuery<IUserResponse>(USER_QUERY);

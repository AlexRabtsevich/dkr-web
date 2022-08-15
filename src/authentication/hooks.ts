import { useMutation } from '@apollo/client';

import { IAuthenticate, IAuthentication } from './typings';
import { AUTHENTICATE, LOGOUT } from './mutation';

interface IAuthenticateVariables {
  authentication: IAuthenticate;
}

interface IAuthenticateResponse {
  authenticate: IAuthentication;
}

export const useAuthenticate = () => useMutation<IAuthenticateResponse, IAuthenticateVariables>(AUTHENTICATE);

export const useLogout = () => useMutation(LOGOUT);

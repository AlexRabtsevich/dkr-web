import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { TokenStorage } from '@dkr-web/common/services';
import { RoutePath } from '@dkr-web/navigation';
import { getEmailValidationRule, getStringValidationRule } from '@dkr-web/form';

import { LoginForm } from './types';
import { useAuthenticate } from '../../hooks';

const tokenStorage = new TokenStorage(localStorage);

const validationSchema: yup.SchemaOf<LoginForm> = yup.object().shape({
  email: getEmailValidationRule(),
  password: getStringValidationRule(),
});

const resolver = yupResolver(validationSchema);

export const useLoginForm = () => {
  return useForm<LoginForm>({ resolver });
};

export const useSubmitLoginForm = () => {
  const [authenticate] = useAuthenticate();
  const navigate = useNavigate();

  return useCallback(
    async (formData: LoginForm) => {
      const { data } = await authenticate({ variables: { authentication: formData } });

      if (data) {
        const { accessToken, refreshToken } = data.authenticate;
        tokenStorage.setAccessToken(accessToken);
        tokenStorage.setRefreshToken(refreshToken);
        navigate(RoutePath.Dashboard);
      }
    },
    [authenticate, navigate],
  );
};

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSuccessAlert } from '@dkr-web/ui-kit';
import { RoutePath } from '@dkr-web/navigation';

import { IRegistrationForm } from './types';
import {
  getConfirmationPasswordRule,
  getEmailValidationRule,
  getPasswordValidationRule,
  getStringValidationRule,
} from '../../../form/validation';
import { useCreateUser } from '../../../gql/hooks';

const validationSchema: yup.SchemaOf<IRegistrationForm> = yup.object().shape({
  firstName: getStringValidationRule(),
  lastName: getStringValidationRule(),
  genderUuid: getStringValidationRule(),
  birthDate: getStringValidationRule(),
  email: getEmailValidationRule(),
  password: getPasswordValidationRule(),
  confirmationPassword: getConfirmationPasswordRule({ watchFieldName: 'password' }),
});

const resolver = yupResolver(validationSchema);

export const useRegistrationForm = () => {
  return useForm<IRegistrationForm>({ resolver });
};

export const useSubmitRegistrationForm = () => {
  const showSuccessAlert = useSuccessAlert();
  const [createUser] = useCreateUser();
  const navigate = useNavigate();

  return useCallback(
    async ({ confirmationPassword, ...createUserData }: IRegistrationForm) => {
      await createUser({ variables: { user: createUserData } });
      showSuccessAlert('User was registered successfully');
      navigate(RoutePath.Login);
    },
    [createUser, navigate, showSuccessAlert],
  );
};

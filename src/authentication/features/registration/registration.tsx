import React, { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import { RegistrationFormFields } from './components';
import { AuthenticationLayout } from '../../components';
import { useRegistrationForm, useSubmitRegistrationForm } from './hooks';

export const Registration: FC = () => {
  const formMethods = useRegistrationForm();
  const { handleSubmit } = formMethods;
  const submit = useSubmitRegistrationForm();

  return (
    <AuthenticationLayout xs={12} sm={12} md={8}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <RegistrationFormFields />
        </form>
      </FormProvider>
    </AuthenticationLayout>
  );
};

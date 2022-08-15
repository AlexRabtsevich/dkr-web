import { Container } from '@mui/material';
import { FormProvider } from 'react-hook-form';

import { LoginFormFields } from './components';
import { useLoginForm, useSubmitLoginForm } from './hooks';

export const Login = () => {
  const formMethods = useLoginForm();
  const { handleSubmit } = formMethods;
  const submit = useSubmitLoginForm();

  return (
    <Container>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <LoginFormFields />
        </form>
      </FormProvider>
    </Container>
  );
};

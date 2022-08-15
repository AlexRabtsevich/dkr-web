import { Button, Card, Grid } from '@mui/material';
import { useFormState } from 'react-hook-form';
import React from 'react';

import { FormTextField, PasswordTextField } from '@dkr-web/form';
import { PrimaryHeadline, Span } from '@dkr-web/ui-kit';

import { AuthenticationLayout } from '../../../components';
import { RegistrationLink } from './registration-link';

export const LoginFormFields = () => {
  const { isSubmitting } = useFormState();

  return (
    <AuthenticationLayout>
      <Grid container direction='column' spacing={3}>
        <Grid item>
          <PrimaryHeadline>Sign in</PrimaryHeadline>
        </Grid>
        <Grid item>
          <FormTextField name='email' label='Email' />
        </Grid>
        <Grid item>
          <PasswordTextField name='password' label='Password' />
        </Grid>
        <Grid item>
          <Button disabled={isSubmitting} color='primary' variant='contained' fullWidth type='submit'>
            Sign in
          </Button>
          <RegistrationLink />
        </Grid>
      </Grid>
    </AuthenticationLayout>
  );
};

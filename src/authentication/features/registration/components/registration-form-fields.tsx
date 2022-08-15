import React, { FC } from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { PrimaryHeadline, Span } from '@dkr-web/ui-kit';
import { FormDatePicker, FormTextField, PasswordTextField } from '@dkr-web/form';
import { RoutePath } from '@dkr-web/navigation';

import { GenderFormSelect } from './gender-form-select';

export const RegistrationFormFields: FC = () => (
  <Grid container direction='column' p='1rem 0'>
    <Grid item>
      <Grid container item>
        <Grid item xs={12} md={1} />
        <Grid item xs={12} md={10} container direction='column' spacing={4}>
          <Grid item>
            <PrimaryHeadline>CREATE AN ACCOUNT</PrimaryHeadline>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item md={6}>
              <FormTextField name='firstName' label='First name' />
            </Grid>
            <Grid item md={6}>
              <FormTextField name='lastName' label='Last name' />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item md={6}>
              <FormTextField name='email' label='Email' />
            </Grid>
            <Grid item md={6}>
              <FormDatePicker name='birthDate' label='Date of birthday' />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item md={6}>
              <GenderFormSelect />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item md={6}>
              <PasswordTextField name='password' label='Password' />
            </Grid>
            <Grid item md={6}>
              <PasswordTextField name='confirmationPassword' label='Confirm password' />
            </Grid>
          </Grid>
          <Grid item>
            <Button color='primary' variant='contained' fullWidth type='submit'>
              Create an account
            </Button>
          </Grid>
          <Grid item>
            <Span align='center' color='white' variant='body2'>
              Already have an account &nbsp;
              <Link to={RoutePath.Login}>Sign In</Link>
            </Span>
          </Grid>
        </Grid>
        <Grid item xs={12} md={1} />
      </Grid>
    </Grid>
  </Grid>
);

import React from 'react';
import { Link } from 'react-router-dom';

import { RoutePath } from '@dkr-web/navigation';

import { StyledSignUpTextDiv } from './styles';

export const RegistrationLink = () => {
  return (
    <StyledSignUpTextDiv>
      Don’t have an account yet?
      <Link to={RoutePath.Registration}>Sign up</Link>
    </StyledSignUpTextDiv>
  );
};

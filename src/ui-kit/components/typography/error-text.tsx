import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export type ErrorTextProps = TypographyProps;

export const ErrorText: FC<ErrorTextProps> = (props) => (
  <Typography color='error' component='span' variant='inherit' {...props} />
);

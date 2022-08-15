import React, { FC } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

export type SecondaryHeadlineProps = TypographyProps;

export const SecondaryHeadline: FC<SecondaryHeadlineProps> = (props) => (
  <Typography gutterBottom color='textSecondary' variant='h2' {...props} />
);

import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export type PrimaryHeadlineProps = TypographyProps;

export const PrimaryHeadline: FC<PrimaryHeadlineProps> = (props) => (
  <Typography variant='h2' color='primary' {...props} />
);

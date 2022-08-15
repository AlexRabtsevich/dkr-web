import React, { FC } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

export type SubtitleProps = TypographyProps;

export const Subtitle: FC<SubtitleProps> = (props) => (
  <Typography color='textSecondary' variant='subtitle1' {...props} />
);

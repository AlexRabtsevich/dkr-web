import React, { FC } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

export type ParagraphProps = TypographyProps;

export const Paragraph: FC<ParagraphProps> = (props) => (
  <Typography gutterBottom color='textPrimary' variant='body1' {...props} />
);

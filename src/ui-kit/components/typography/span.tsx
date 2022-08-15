import React, { FC } from 'react';
import { TypographyProps, Typography } from '@mui/material';

export type SpanProps = TypographyProps;

export const Span: FC<SpanProps> = (props) => <Typography color='textPrimary' variant='subtitle2' {...props} />;

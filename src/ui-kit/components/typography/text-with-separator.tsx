import React, { FC } from 'react';
import { TypographyProps } from '@mui/material';

import { StyledTextWithSeparator } from './styles';

export type TextWithSeparatorProps = TypographyProps;

export const TextWithSeparator: FC<TextWithSeparatorProps> = (props) => (
  <StyledTextWithSeparator color='textSecondary' {...props} />
);

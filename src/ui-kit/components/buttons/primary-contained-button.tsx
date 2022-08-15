import React, { FC } from 'react';
import { Button } from '@mui/material';

import { IButtonProps } from './types';

export const PrimaryContainedButton: FC<IButtonProps> = (props) => {
  return <Button variant='contained' {...props} />;
};

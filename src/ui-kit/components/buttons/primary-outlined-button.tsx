import React, { FC } from 'react';
import { Button } from '@mui/material';

import { IButtonProps } from './types';

export const PrimaryOutlinedButton: FC<IButtonProps> = (props) => {
  return <Button variant='outlined' color='primary' {...props} />;
};

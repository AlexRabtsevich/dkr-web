import React, { FC } from 'react';
import { Button } from '@mui/material';

import { IButtonProps } from './types';

export const PrimaryTextButton: FC<IButtonProps> = (props) => {
  return <Button variant='text' color='primary' {...props} />;
};

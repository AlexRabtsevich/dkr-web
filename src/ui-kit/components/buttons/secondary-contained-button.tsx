import React, { FC } from 'react';
import { Button } from '@mui/material';

import { IButtonProps } from './types';

export const SecondaryContainedButton: FC<IButtonProps> = (props) => {
  return <Button variant='contained' color='secondary' {...props} />;
};

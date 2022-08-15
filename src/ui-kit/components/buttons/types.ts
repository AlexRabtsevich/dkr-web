import { ButtonProps } from '@mui/material';
import { HTMLAttributeAnchorTarget } from 'react';

export interface IButtonProps extends ButtonProps {
  target?: HTMLAttributeAnchorTarget;
}

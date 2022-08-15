import { FC, PropsWithChildren, ReactNode } from 'react';
import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { StyledPageHeaderHeadline, StyledPageHeaderActionButtonsBox } from './styles';

export interface IPageHeaderProps {
  title?: ReactNode;
  onClose?: () => void;
}

export const PageHeader: FC<PropsWithChildren<IPageHeaderProps>> = ({ onClose, title, children }) => {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' pb='1rem'>
      <Box display='flex' justifyContent='space-start' alignItems='center'>
        <StyledPageHeaderHeadline color='textPrimary'>{title}</StyledPageHeaderHeadline>
      </Box>
      <StyledPageHeaderActionButtonsBox display='flex'>
        {children}
        {onClose && (
          <Button variant='text' color='secondary' onClick={onClose} startIcon={<CloseIcon />}>
            Close
          </Button>
        )}
      </StyledPageHeaderActionButtonsBox>
    </Box>
  );
};

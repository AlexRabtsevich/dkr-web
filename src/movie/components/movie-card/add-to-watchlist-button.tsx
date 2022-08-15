import { ButtonProps, IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { FC } from 'react';

export const AddToWatchlistButton: FC<Pick<ButtonProps, 'onClick'>> = ({ onClick }) => {
  return (
    <Tooltip title='Add to watchlist'>
      <IconButton onClick={onClick}>
        <AddIcon />
      </IconButton>
    </Tooltip>
  );
};

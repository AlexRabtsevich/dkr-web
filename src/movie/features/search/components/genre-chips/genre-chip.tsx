import { Chip } from '@mui/material';
import { FC } from 'react';

interface IProps {
  genreId: string | number;
  name: string;
  isSelected: boolean;
  onChipClick(genreId: string): void;
}

export const GenreChip: FC<IProps> = ({ genreId, isSelected, onChipClick, name }) => (
  <Chip
    clickable
    color={isSelected ? 'primary' : 'default'}
    sx={{ mr: '0.5rem' }}
    variant={isSelected ? 'filled' : 'outlined'}
    label={name}
    onClick={() => onChipClick(genreId.toString())}
  />
);

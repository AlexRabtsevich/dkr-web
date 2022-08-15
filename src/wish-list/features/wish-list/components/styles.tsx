import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableCell = styled(TableCell)(() => ({
  padding: 0,
}));

export const StyledHeaderTableCell = styled(TableCell)(() => ({
  padding: '1rem 0',
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const StyledCellImg = styled('img')({
  height: 84,
  width: 58,
  cursor: 'pointer',
  transition: '0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FC, useCallback } from 'react';
import moment from 'moment';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { TablePagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';

import { MOVIE_RELEASE_DATE_FORMAT } from '@dkr-web/movie';
import { PrimaryTextButton } from '@dkr-web/ui-kit';
import { RoutePath } from '@dkr-web/navigation';

import { IWishListMovies, useDeleteWishListMovie } from '../../../hooks';
import defaultImgSrc from '../../../../templates/images/movie-palceholder.svg';
import { StyledCellImg, StyledHeaderTableCell, StyledTableCell, StyledTableRow } from './styles';
import { GET_WISH_LISTS } from '../../../queries';

interface IProps extends IWishListMovies {
  onPageChange: (page: number) => void;
  onMovieDeleted: (movieUuid: string) => void;
  wishListUuid: string;
}

export const MoviesTable: FC<IProps> = ({ movies, onMovieDeleted, onPageChange, wishListUuid }) => {
  const [deleteMovie, { loading }] = useDeleteWishListMovie();
  const navigate = useNavigate();
  const client = useApolloClient();

  const onDelete = useCallback(
    async (wishListMovieUuid: string) => {
      await deleteMovie({ variables: { wishListUuid, wishListMovieUuid } });
      onMovieDeleted(wishListMovieUuid);
      client.refetchQueries({ include: [GET_WISH_LISTS] });
    },
    [client, deleteMovie, onMovieDeleted, wishListUuid],
  );

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledHeaderTableCell>Poster image</StyledHeaderTableCell>
              <StyledHeaderTableCell align='left'>Title</StyledHeaderTableCell>
              <StyledHeaderTableCell align='left'>Added to list</StyledHeaderTableCell>
              <StyledHeaderTableCell align='left'>Is watched</StyledHeaderTableCell>
              <StyledHeaderTableCell align='left'>Delete</StyledHeaderTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.results.map(({ title, createdAt, posterPath, isWatched, uuid }) => (
              <StyledTableRow key={uuid}>
                <StyledTableCell component='th' scope='row'>
                  <StyledCellImg
                    onClick={() => navigate(`${RoutePath.Movie}/${uuid}`)}
                    src={posterPath || defaultImgSrc}
                    srcSet={posterPath || defaultImgSrc}
                    alt='test'
                  />
                </StyledTableCell>
                <StyledTableCell align='left'>{title}</StyledTableCell>
                <StyledTableCell align='left'>{moment(createdAt).format(MOVIE_RELEASE_DATE_FORMAT)}</StyledTableCell>
                <StyledTableCell align='left'>{isWatched ? 'Watched' : 'Not watched yet'}</StyledTableCell>
                <StyledTableCell align='left'>
                  <PrimaryTextButton
                    disabled={loading}
                    startIcon={<HighlightOffIcon />}
                    onClick={() => onDelete(uuid)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component='div'
        count={movies.totalResults}
        rowsPerPage={10}
        page={movies.page - 1}
        onPageChange={(_, page) => onPageChange(page + 1)}
      />
    </Paper>
  );
};

import React, { FC, useCallback } from 'react';
import { Box } from '@mui/material';

import { Pagination } from '@dkr-web/ui-kit';
import { MAX_MOVIE_PAGE_COUNT } from '@dkr-web/movie';

import { useMovieSearchStore } from '../store';

interface IProps {
  count: number;
}

export const MovieSearchPagination: FC<IProps> = ({ count }) => {
  const updateState = useMovieSearchStore((state) => state.updateState);
  const page = useMovieSearchStore((state) => state.page);

  const pageCount = count > MAX_MOVIE_PAGE_COUNT ? MAX_MOVIE_PAGE_COUNT : count;

  const onChange = useCallback((newPage: number) => updateState({ page: newPage }), [updateState]);

  return (
    <Box display='flex' justifyContent='center' p='2rem 0'>
      <Pagination onChange={onChange} page={page} count={pageCount} />
    </Box>
  );
};

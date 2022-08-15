import { Box, Card, Container, Grid } from '@mui/material';
import React from 'react';

import { useMovieGenres, useSearchMovies } from '@dkr-web/movie';
import { StyledPageContainer } from '@dkr-web/common/components';

import { MovieSearchFilters } from './components/movie-search-filters';
import { MovieSearchPagination } from './components';
import { useSearchMoviesVariables } from './hoks';
import { MovieCard } from '../../components/movie-card/movie-card';
import { MovieSorting } from './components/movie-sorting';

export const SearchPage = () => {
  const variables = useSearchMoviesVariables();
  const movies = useSearchMovies({ variables });

  return (
    <StyledPageContainer maxWidth={false}>
      <Grid container columnSpacing={2}>
        <Grid item container direction='column' xl={2} md={3} rowSpacing={4}>
          <Grid item>
            <MovieSorting />
          </Grid>
          <Grid item>
            <MovieSearchFilters />
          </Grid>
        </Grid>
        <Grid item xl={10} md={9}>
          {movies.data && (
            <Box display='flex' flexWrap='wrap' gap='1.5rem' justifyContent='center'>
              {movies.data.searchMovies.results.map(
                ({ id, title, posterPath, voteAverage, overview, releaseDate, backdropPath }) => (
                  <MovieCard
                    rating={voteAverage}
                    key={id}
                    imageSrc={posterPath}
                    title={title}
                    id={id}
                    description={overview}
                    releaseDate={releaseDate}
                    landscapeImgSrc={backdropPath}
                  />
                ),
              )}
            </Box>
          )}
          {movies.data && <MovieSearchPagination count={movies.data.searchMovies.totalPages} />}
        </Grid>
      </Grid>
    </StyledPageContainer>
  );
};

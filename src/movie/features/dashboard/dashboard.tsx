import React, { useState } from 'react';
import { Container } from '@mui/material';

import { PageHeader } from '@dkr-web/common/components';
import { DEFAULT_PAGE } from '@dkr-web/common/constants';
import { usePopularMovies, useTopRatedMovies, useUpcomingMovies } from '@dkr-web/movie';

import { DashboardMoviesCard } from './components';

export const DashboardPage = () => {
  const [popularMoviesPage, setPopularMoviesPage] = useState(DEFAULT_PAGE);
  const [upcomingMoviesPage, setUpcomingMoviesPage] = useState(DEFAULT_PAGE);
  const [topRatedMoviesPage, setTopRatedMoviesPage] = useState(DEFAULT_PAGE);
  const { data: popularMoviesData } = usePopularMovies({ variables: { page: popularMoviesPage } });
  const { data: upcomingMoviesData } = useUpcomingMovies({ variables: { page: upcomingMoviesPage } });
  const { data: topRatedMoviesData } = useTopRatedMovies({ variables: { page: topRatedMoviesPage } });

  return (
    <Container maxWidth='xl' sx={{ p: '2rem' }}>
      <PageHeader title='Dashboard' />
      {popularMoviesData && (
        <DashboardMoviesCard
          page={popularMoviesPage}
          label='Popular movies'
          changePage={setPopularMoviesPage}
          count={popularMoviesData.popularMovies.totalPages}
          movies={popularMoviesData.popularMovies.results}
        />
      )}
      {upcomingMoviesData && (
        <DashboardMoviesCard
          page={upcomingMoviesPage}
          label='Upcoming movies'
          changePage={setUpcomingMoviesPage}
          count={upcomingMoviesData.upcomingMovies.totalPages}
          movies={upcomingMoviesData.upcomingMovies.results}
        />
      )}
      {topRatedMoviesData && (
        <DashboardMoviesCard
          page={topRatedMoviesPage}
          label='Top rated movies'
          changePage={setTopRatedMoviesPage}
          count={topRatedMoviesData.topRatedMovies.totalPages}
          movies={topRatedMoviesData.topRatedMovies.results}
        />
      )}
    </Container>
  );
};

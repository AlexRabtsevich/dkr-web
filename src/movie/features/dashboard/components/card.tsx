import React, { FC } from 'react';
import { Box, Card, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';

import { Pagination, PrimaryHeadline } from '@dkr-web/ui-kit';
import { IMainMovieFields } from '@dkr-web/movie';

import { MovieCard } from '../../../components';

interface IProps {
  label: string;
  page: number;
  changePage: (page: number) => void;
  count: number;
  movies: IMainMovieFields[];
}

export const DashboardMoviesCard: FC<IProps> = ({ label, changePage, count, movies, page }) => {
  return (
    <Card sx={{ p: 0, mt: '3rem' }}>
      <CardContent>
        <PrimaryHeadline sx={{ mb: '2rem' }}>{label}</PrimaryHeadline>
        <Box display='flex' flexWrap='wrap' gap='1.5rem' justifyContent='center'>
          {movies.map(({ id, title, posterPath, voteAverage, overview, releaseDate, backdropPath }) => (
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
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', p: '1rem 0' }}>
        <Pagination onChange={changePage} page={page} count={count} />
      </CardActions>
    </Card>
  );
};

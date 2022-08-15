import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Card, CardMedia, Chip, Container, Grid, Link, Rating } from '@mui/material';
import React from 'react';
import moment from 'moment';

import { PageHeader } from '@dkr-web/common/components';
import { convertMinutesToHoursAndMinutes, getItemsStringGeneric } from '@dkr-web/common/utils';
import { PrimaryHeadline, Span } from '@dkr-web/ui-kit';

import defaultImageSrc from '../../../templates/images/movie-palceholder.svg';
import { CaptionWithContent } from './components';
import { MOVIE_RELEASE_DATE_FORMAT } from '../../constants';
import { useMovieDetails } from '../../hooks';
import { AddMovieToWishList } from '../../components/movie-card/add-movie-to-wish-list';

export const MovieDetails = () => {
  const params = useParams<{ id: string }>();
  const { data } = useMovieDetails({ variables: { id: Number(params.id) } });
  const navigate = useNavigate();

  if (!data) {
    return null;
  }

  const {
    title,
    overview,
    runtime,
    status,
    posterPath,
    releaseDate,
    genres,
    voteAverage,
    originalTitle,
    originalLanguage,
    budget,
    tagline,
    homepage,
    productionCompanies,
    productionCountries,
    spokenLanguages,
    revenue,
    id,
  } = data.movieDetails;

  return (
    <Container maxWidth='lg' sx={{ p: '1rem 0' }}>
      <PageHeader onClose={() => navigate(-1)} />
      <Card>
        <Grid container columnSpacing={10}>
          <Grid item md={4} display='flex' flexDirection='column' gap='1rem 0' justifyContent='flex-start'>
            <CardMedia
              sx={{ borderRadius: '6px' }}
              component='img'
              height={440}
              image={posterPath || defaultImageSrc}
              alt='green iguana'
            />
          </Grid>
          <Grid item md={8} display='flex' flexDirection='column' gap='1rem 0'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <PrimaryHeadline fontSize='2.25rem' fontWeight='bold' color='textSecondary'>
                {title}
              </PrimaryHeadline>
              <AddMovieToWishList movieId={id} />
            </Box>

            <Box display='flex' gap='0 0.5rem' flexWrap='wrap'>
              <Chip label={moment(releaseDate).format(MOVIE_RELEASE_DATE_FORMAT)} />
              <Chip label={getItemsStringGeneric(genres, 'name')} />
              {runtime && <Chip label={convertMinutesToHoursAndMinutes(runtime)} />}
            </Box>
            <Box display='flex' alignItems='center' gap='0 0.5rem'>
              <Span fontSize='1.25rem'>{voteAverage.toFixed(1)}</Span>
              <Rating readOnly defaultValue={voteAverage} max={10} />
            </Box>
            <Box>
              <Span fontWeight='bold' gutterBottom>
                Overview
              </Span>
              <Span>{overview}</Span>
            </Box>
            <CaptionWithContent caption='Status' content={status} />
            <CaptionWithContent caption='Tagline' content={tagline} />
            <CaptionWithContent caption='Original title' content={originalTitle} />
            <CaptionWithContent caption='Original language' content={originalLanguage} />
            {!!budget && <CaptionWithContent caption='Budget' content={`$${budget}`} />}
            {!!revenue && <CaptionWithContent caption='Revenue' content={`$${revenue}`} />}
            {homepage && <CaptionWithContent caption='Homepage' content={<Link href={homepage}>{homepage}</Link>} />}
            <CaptionWithContent
              caption='Production companies'
              content={getItemsStringGeneric(productionCompanies, 'name')}
            />
            <CaptionWithContent
              caption='Production countries'
              content={getItemsStringGeneric(productionCountries, 'name')}
            />
            <CaptionWithContent caption='Spoken languages' content={getItemsStringGeneric(spokenLanguages, 'name')} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

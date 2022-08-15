import React, { FC } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardContent, Popover } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { useAnchor } from '@dkr-web/common/hooks';
import { RoutePath } from '@dkr-web/navigation';
import { PrimaryHeadline, Span } from '@dkr-web/ui-kit';

import { MOVIE_RELEASE_DATE_FORMAT } from '../../constants';
import defaultLandscapeImageSrc from '../../../templates/images/landscape-movie-placeholder.png';
import defaultImageSrc from '../../../templates/images/movie-palceholder.svg';
import { StyledMovieCard } from './styles';
import { AddMovieToWishList } from './add-movie-to-wish-list';

interface IProps {
  landscapeImgSrc: string | null;
  imageSrc: string | null;
  rating: number;
  id: string | number;
  title: string;
  description: string | null;
  releaseDate: string;
}

export const MovieCard: FC<IProps> = ({ imageSrc, rating, id, title, description, releaseDate, landscapeImgSrc }) => {
  const { anchorElement, setAnchor, removeAnchor } = useAnchor();

  return (
    <>
      <StyledMovieCard
        sx={{ width: { md: '22%', xl: '17%' }, height: { md: 300, xl: 360 } }}
        rating={rating}
        onMouseEnter={setAnchor}
      >
        <CardMedia component='img' height='100%' image={imageSrc || defaultImageSrc} alt='green iguana' />
      </StyledMovieCard>
      <Popover
        disableScrollLock
        onClose={removeAnchor}
        open={!!anchorElement}
        anchorEl={anchorElement}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
      >
        <StyledMovieCard
          sx={{ width: { md: 400, xl: 450 }, height: '100%' }}
          rating={rating}
          onMouseLeave={removeAnchor}
        >
          <Link to={`${RoutePath.Movie}/${id}`}>
            <CardMedia
              component='img'
              height='100%'
              image={landscapeImgSrc || defaultLandscapeImageSrc}
              alt='green iguana'
            />
          </Link>
          <CardContent sx={{ pt: 0, height: 'auto' }}>
            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mb: '0.5rem' }}>
              <PrimaryHeadline fontSize='1.25rem'>
                <Link to={`${RoutePath.Movie}/${id}`}>{title}</Link>
              </PrimaryHeadline>
              <AddMovieToWishList movieId={id} />
            </Box>
            {description && (
              <Span fontSize='0.75rem' gutterBottom>
                {description}
              </Span>
            )}
            <Span fontSize='0.75rem' color='textSecondary'>
              <strong>Release Date:</strong> {moment(releaseDate).format(MOVIE_RELEASE_DATE_FORMAT)}
            </Span>
          </CardContent>
        </StyledMovieCard>
      </Popover>
    </>
  );
};

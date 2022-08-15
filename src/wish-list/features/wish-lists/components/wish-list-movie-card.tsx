import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutePath } from '@dkr-web/navigation';

import defaultImgSrc from '../../../../templates/images/movie-palceholder.svg';
import { StyledImg } from './styles';

interface IProps {
  imageSrc: string | null;
  id: number | string;
}

export const WishListMovie: FC<IProps> = ({ imageSrc, id }) => {
  const navigate = useNavigate();

  return (
    <StyledImg
      src={`${imageSrc || defaultImgSrc}`}
      srcSet={`${imageSrc || defaultImgSrc}`}
      loading='lazy'
      alt='movie'
      onClick={() => navigate(`${RoutePath.Movie}/${id}`)}
    />
  );
};

import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { TokenStorage } from '@dkr-web/common/services';
import { RoutePath } from '@dkr-web/navigation';

import { AddToWatchlistButton } from './add-to-watchlist-button';
import { AvailableWishLists } from './available-wish-lists';

const tokenStorage = new TokenStorage(localStorage);

export interface IAddMovieToWishListProps {
  movieId: string | number;
}

export const AddMovieToWishList: FC<IAddMovieToWishListProps> = ({ movieId }) => {
  const isAuthorized = !!tokenStorage.getAccessToken();
  const navigate = useNavigate();

  return isAuthorized ? (
    <AvailableWishLists movieId={movieId} />
  ) : (
    <AddToWatchlistButton onClick={() => navigate(RoutePath.Login)} />
  );
};

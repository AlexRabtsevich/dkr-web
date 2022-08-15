import { useMutation } from '@apollo/client';

import { ISuccessData } from '@dkr-web/gql';

import { DELETE_WISH_LIST_MOVIE } from '../mutations';

export interface IUseDeleteWishListMovieVariables {
  wishListUuid: string;
  wishListMovieUuid: string;
}

export const useDeleteWishListMovie = () =>
  useMutation<ISuccessData, IUseDeleteWishListMovieVariables>(DELETE_WISH_LIST_MOVIE);

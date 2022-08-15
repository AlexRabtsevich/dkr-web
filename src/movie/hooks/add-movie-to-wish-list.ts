import { useMutation } from '@apollo/client';

import { ADD_MOVIE_TO_WISH_LIST } from '../mutations';

export interface IAddMovieToWishListVariables {
  wishListUuid: string;
  movieId: number;
}

export interface IAddMovieToWishListData {
  addMovieToWishList: { uuid: string };
}

export const useAddMovieToWishList = () =>
  useMutation<IAddMovieToWishListData, IAddMovieToWishListVariables>(ADD_MOVIE_TO_WISH_LIST);

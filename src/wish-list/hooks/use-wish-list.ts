import { QueryHookOptions } from '@apollo/client/react/types/types';
import { useQuery } from '@apollo/client';

import { IPagination } from '@dkr-web/common/typings';

import { IWishList, IWishListMovie } from '../typings';
import { GET_WISH_LIST } from '../queries';

type WishListMovie = Pick<IWishListMovie, 'title' | 'id' | 'createdAt' | 'uuid' | 'posterPath' | 'isWatched'>;

export interface IWishListMovies {
  movies: IPagination<WishListMovie>;
}

export interface IUseWishListData {
  wishList: IWishList & IWishListMovies;
}

export interface IUseWishListVariables {
  wishListUuid: string;
  moviesPage: number;
}

export const useWishList = (options?: QueryHookOptions<IUseWishListData, IUseWishListVariables>) =>
  useQuery<IUseWishListData, IUseWishListVariables>(GET_WISH_LIST, options);

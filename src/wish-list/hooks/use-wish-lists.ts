import { useQuery } from '@apollo/client';
import { QueryHookOptions } from '@apollo/client/react/types/types';

import { IPagination, IPaginationArgs } from '@dkr-web/common/typings';
import { IMovie } from '@dkr-web/movie';

import { IWishList } from '../typings';
import { GET_WISH_LISTS } from '../queries';

type IWishListsMovie = Pick<IMovie, 'id' | 'posterPath'>;

interface IWishListsMovies {
  movies: IPagination<IWishListsMovie>;
}

export interface IUseWishListsData {
  wishLists: IPagination<IWishList & IWishListsMovies>;
}

export const useWishLists = (options?: QueryHookOptions<IUseWishListsData, IPaginationArgs>) =>
  useQuery<IUseWishListsData, IPaginationArgs>(GET_WISH_LISTS, options);

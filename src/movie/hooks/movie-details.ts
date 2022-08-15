import { QueryHookOptions } from '@apollo/client/react/types/types';
import { useQuery } from '@apollo/client';

import { IMovieDetails } from '../typings';
import { GET_MOVIE_DETAILS } from '../queries';

interface IUseMovieDetailsData {
  movieDetails: IMovieDetails;
}

interface IUseMovieDetailsVariables {
  id: number;
}

export const useMovieDetails = (options?: QueryHookOptions<IUseMovieDetailsData, IUseMovieDetailsVariables>) =>
  useQuery(GET_MOVIE_DETAILS, options);

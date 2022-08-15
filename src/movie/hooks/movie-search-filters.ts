import { useQuery } from '@apollo/client';

import { GET_MOVIE_COUNTRY_FILTERS, GET_MOVIE_LANGUAGE_FILTERS } from '../queries';
import { IMovieCountryFilter, IMovieLanguageFilter } from '../typings';

interface IUseMovieCountryFilters {
  movieCountryFilters: IMovieCountryFilter[];
}

interface IUseMovieCountryFiltersData {
  movieLanguageFilters: IMovieLanguageFilter[];
}

export const useMovieLanguageFilters = () => useQuery<IUseMovieCountryFiltersData>(GET_MOVIE_LANGUAGE_FILTERS);

export const useMovieCountryFilters = () => useQuery<IUseMovieCountryFilters>(GET_MOVIE_COUNTRY_FILTERS);

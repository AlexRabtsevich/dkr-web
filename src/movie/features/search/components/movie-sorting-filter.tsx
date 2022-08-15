import { Select } from '@dkr-web/ui-kit';
import { MovieSorting } from '@dkr-web/movie';

import { useMovieSearchStore } from '../store';

const sortingOptions = [
  { name: 'Popular (asc)', value: MovieSorting.PopularityAsc },
  { name: 'Popular (desc)', value: MovieSorting.PopularityDesc },
  { name: 'Release date (asc)', value: MovieSorting.ReleaseDateAsc },
  { name: 'Release date (desc)', value: MovieSorting.ReleaseDateDesc },
  { name: 'Revenue (asc)', value: MovieSorting.RevenueAsc },
  { name: 'Revenue (desc)', value: MovieSorting.RevenueDesc },
  { name: 'Vote average (asc)', value: MovieSorting.VoteAverageAsc },
  { name: 'Vote average  (desc)', value: MovieSorting.VoteAverageDesc },
  { name: 'Title (desc)', value: MovieSorting.OriginalTitleAsc },
  { name: 'Title (desc)', value: MovieSorting.OriginalTitleDesc },
];

export const MovieSearchSortingFilter = () => {
  const updateState = useMovieSearchStore((state) => state.updateState);
  const sortBy = useMovieSearchStore((state) => state.sortBy);

  return (
    <Select
      items={sortingOptions}
      value={sortBy}
      onChange={(event) => updateState({ sortBy: event.target.value as MovieSorting })}
    />
  );
};

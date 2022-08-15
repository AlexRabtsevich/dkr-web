import { useMovieCountryFilters } from '@dkr-web/movie';
import { Paragraph, Select } from '@dkr-web/ui-kit';
import { convertArrayToSelectData } from '@dkr-web/common/utils';

import { useMovieSearchStore } from '../store';

export const MovieCountryFilter = () => {
  const updateState = useMovieSearchStore((state) => state.updateState);
  const region = useMovieSearchStore((state) => state.region);
  const { data } = useMovieCountryFilters();

  return (
    <>
      <Paragraph>Search movie by release in region</Paragraph>
      <Select
        label='Region'
        items={convertArrayToSelectData(data?.movieCountryFilters || [], ['name'], 'handle')}
        value={region}
        onChange={(event) => updateState({ region: event.target.value as string })}
      />
    </>
  );
};

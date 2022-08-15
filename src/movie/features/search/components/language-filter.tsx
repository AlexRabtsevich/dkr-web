import { useMovieLanguageFilters } from '@dkr-web/movie';
import { Paragraph, Select } from '@dkr-web/ui-kit';
import { convertArrayToSelectData } from '@dkr-web/common/utils';

import { useMovieSearchStore } from '../store';

export const MovieLanguageFilter = () => {
  const updateState = useMovieSearchStore((state) => state.updateState);
  const language = useMovieSearchStore((state) => state.language);
  const { data } = useMovieLanguageFilters();

  return (
    <>
      <Paragraph>Search movie by original language</Paragraph>
      <Select
        label='Language'
        items={convertArrayToSelectData(data?.movieLanguageFilters || [], ['name'], 'handle')}
        value={language}
        onChange={(event) => updateState({ language: event.target.value as string })}
      />
    </>
  );
};

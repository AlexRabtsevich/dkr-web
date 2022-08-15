import moment from 'moment';

import { DatePicker } from '@dkr-web/ui-kit';

import { useMovieSearchStore } from '../../store';

export const DateFromFilter = () => {
  const updateState = useMovieSearchStore((state) => state.updateState);
  const dateFrom = useMovieSearchStore((state) => state.releaseDateGte);
  const maxDate = useMovieSearchStore((state) => state.releaseDateLte) || moment();

  return (
    <DatePicker
      label='From'
      onChange={(releaseDateGte) => updateState({ releaseDateGte })}
      value={dateFrom}
      maxDate={maxDate}
    />
  );
};

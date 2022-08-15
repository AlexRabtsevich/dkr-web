import { DatePicker } from '@dkr-web/ui-kit';

import { useMovieSearchStore } from '../../store';

export const DateToFilter = () => {
  const updateState = useMovieSearchStore((state) => state.updateState);
  const dateFrom = useMovieSearchStore((state) => state.releaseDateLte);
  const minDate = useMovieSearchStore((state) => state.releaseDateLte);

  return (
    <DatePicker
      label='To'
      onChange={(releaseDateLte) => updateState({ releaseDateLte })}
      value={dateFrom}
      minDate={minDate || undefined}
    />
  );
};

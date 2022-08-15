import { Stack } from '@mui/material';
import { useCallback } from 'react';

import { Paragraph } from '@dkr-web/ui-kit';
import { useMovieGenres } from '@dkr-web/movie';

import { useMovieSearchStore } from '../../store';
import { GenreChip } from './genre-chip';

export const GenreChips = () => {
  const updateState = useMovieSearchStore((state) => state.updateState);
  const genreIds = useMovieSearchStore((state) => state.genreIds);
  const { data } = useMovieGenres();

  const onChipClick = useCallback(
    (value: string) => {
      if (genreIds.includes(value)) {
        updateState({ genreIds: genreIds.filter((id) => id !== value) });
      } else {
        updateState({ genreIds: [...genreIds, value] });
      }
    },
    [genreIds, updateState],
  );

  return (
    <>
      <Paragraph gutterBottom={false}>Genres</Paragraph>
      <Stack direction='row' flexWrap='wrap' gap='0.5rem 0'>
        {data?.movieGenres.map(({ name, id }) => (
          <GenreChip
            key={id}
            genreId={id}
            name={name}
            isSelected={genreIds.includes(id.toString())}
            onChipClick={onChipClick}
          />
        ))}
      </Stack>
    </>
  );

  // return (
  //   <Multiselect
  //     label='Movie genres'
  //     items={items}
  //     selectItems={(value) => updateState({ genreIds: value })}
  //     value={genreIds}
  //   />
  // );
};

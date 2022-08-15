import { Box, Slider } from '@mui/material';

import { Paragraph } from '@dkr-web/ui-kit';

import { useMovieSearchStore } from '../store';

const marks = [
  { value: 0, label: '0' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
  { value: 150, label: '150' },
  { value: 200, label: '200' },
  { value: 250, label: '250' },
  { value: 300, label: '300' },
  { value: 350, label: '350' },
  { value: 400, label: '400' },
];

export const MovieSearchRuntimeFilter = () => {
  const updateState = useMovieSearchStore((state) => state.updateState);

  return (
    <>
      <Paragraph>Search movie by runtime</Paragraph>
      <Box padding='0 1rem'>
        <Slider
          marks={marks}
          defaultValue={[0, 400]}
          min={0}
          step={5}
          max={400}
          valueLabelDisplay='auto'
          onChangeCommitted={(_, value) => {
            if (Array.isArray(value)) {
              updateState({ runtimeGte: value[0], runtimeLte: value[1] });
            }
          }}
        />
      </Box>
    </>
  );
};

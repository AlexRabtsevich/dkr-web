import { Accordion, AccordionDetails, AccordionSummary, Box, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Subtitle } from '@dkr-web/ui-kit';
import { useToggle } from '@dkr-web/common/hooks';

import { MovieLanguageFilter } from './language-filter';
import { MovieSearchRuntimeFilter } from './runtime-filter';
import { GenreChips } from './genre-chips';
import { DateFilters } from './date-filters';
import { MovieCountryFilter } from './country-filter';

export const MovieSearchFilters = () => {
  const [isToggled, toggle] = useToggle(true);

  return (
    <Accordion expanded={isToggled} onChange={toggle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
        <Subtitle>Filters</Subtitle>
      </AccordionSummary>
      <AccordionDetails>
        <Box display='flex' flexDirection='column' gap='1rem 0'>
          <GenreChips />
          <DateFilters />
          <MovieLanguageFilter />
          <MovieCountryFilter />
          <MovieSearchRuntimeFilter />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

import { Accordion, AccordionDetails, AccordionSummary, Card, Collapse, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useToggle } from '@dkr-web/common/hooks';
import { Paragraph, Span, Subtitle } from '@dkr-web/ui-kit';

import { MovieSearchSortingFilter } from './movie-sorting-filter';

export const MovieSorting = () => {
  const [isToggled, toggle] = useToggle(true);

  return (
    <Accordion expanded={isToggled} onChange={toggle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
        <Subtitle>Sort results by </Subtitle>
      </AccordionSummary>
      <AccordionDetails>
        <MovieSearchSortingFilter />
      </AccordionDetails>
    </Accordion>
  );
};

import { Paragraph } from '@dkr-web/ui-kit';

import { DateFromFilter } from './date-from-filter';
import { DateToFilter } from './date-to-filter';

export const DateFilters = () => (
  <>
    <Paragraph>Search by date</Paragraph>
    <DateFromFilter />
    <DateToFilter />
  </>
);

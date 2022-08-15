import { useState } from 'react';

import { DEFAULT_PAGE } from '@dkr-web/common/constants';

export const usePaginationPage = (defaultPage = DEFAULT_PAGE) => useState(defaultPage);

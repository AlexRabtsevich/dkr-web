import React, { ChangeEvent, FC, useCallback, useMemo } from 'react';
import { PaginationProps, Pagination as MaterialPagination } from '@mui/material';

import { useCheckDesktopMediaQuery } from '../../common/hooks';

const DESKTOP_PAGE_SIBLING_COUNT = 1;
const MOBILE_PAGE_SIBLING_COUNT = 0;

interface IProps {
  onChange: (page: number) => void;
}

export const Pagination: FC<Pick<PaginationProps, 'count' | 'page'> & IProps> = ({ onChange, count, page }) => {
  const isDesktopView = useCheckDesktopMediaQuery();

  const siblingCount = useMemo(
    () => (isDesktopView ? DESKTOP_PAGE_SIBLING_COUNT : MOBILE_PAGE_SIBLING_COUNT),
    [isDesktopView],
  );

  const onPageChange = useCallback(
    (event: ChangeEvent<unknown>, changedPage: number) => {
      onChange(changedPage);
    },
    [onChange],
  );

  if (!count) {
    return null;
  }

  return <MaterialPagination count={count} page={page} onChange={onPageChange} siblingCount={siblingCount} />;
};

import { useCallback, useState, MouseEvent } from 'react';

export const useAnchor = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const removeAnchor = useCallback(() => setAnchorElement(null), []);

  const setAnchor = useCallback((event: MouseEvent<HTMLElement>) => setAnchorElement(event.currentTarget), []);

  return {
    anchorElement,
    removeAnchor,
    setAnchor,
    setAnchorElement,
  };
};

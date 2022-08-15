import { useCallback, useState } from 'react';

export const useToggleState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open, close };
};

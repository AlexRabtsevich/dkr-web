import { useCallback, useState } from 'react';

export const useToggle = (initialValue?: boolean): [boolean, () => void] => {
  const [isVisible, setIsVisible] = useState<boolean>(!!initialValue);

  const toggle = useCallback(() => setIsVisible((prevState) => !prevState), []);

  return [isVisible, toggle];
};

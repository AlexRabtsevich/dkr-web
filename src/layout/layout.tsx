import { FC, PropsWithChildren } from 'react';

import { LayoutHeader } from './components';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <LayoutHeader />
      {children}
    </div>
  );
};

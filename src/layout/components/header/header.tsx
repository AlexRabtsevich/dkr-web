import { Box } from '@mui/material';
import { ReactNode } from 'react';

import { HeaderLogo, StyledHeader, ThemeToggle } from './components';
import { NavigationMenu } from './components/navigation-menu';
import { RoutePath } from '../../../navigation';
import { useCheckDesktopMediaQuery } from '../../../common/hooks';
import { BurgerMenu } from './components/burger-menu';
import { TokenStorage } from '../../../common/services';

export interface INavigationMenuOption {
  label: string;
  path: string;
  icon?: ReactNode;
}

const authenticationLinks = [
  { label: 'Registration', path: RoutePath.Registration },
  { label: 'Sign In', path: RoutePath.Login },
];

const mainLinks = [
  { label: 'Dashboard', path: RoutePath.Dashboard },
  { label: 'Search', path: RoutePath.Home },
  { label: 'My wish lists', path: RoutePath.MyWishLists },
  { label: 'Logout', path: RoutePath.Logout },
];

const tokenStorage = new TokenStorage(localStorage);

export const LayoutHeader = () => {
  const isDesktopView = useCheckDesktopMediaQuery();
  const isAuthorized = !!tokenStorage.getAccessToken();
  const links = isAuthorized ? mainLinks : authenticationLinks;

  return (
    <StyledHeader>
      {isDesktopView ? (
        <>
          <HeaderLogo />
          <Box display='flex'>
            <NavigationMenu navigationMenuOptions={links} />
            <ThemeToggle />
          </Box>
        </>
      ) : (
        <>
          <BurgerMenu navigationMenuOptions={links} />
          <ThemeToggle />
        </>
      )}
    </StyledHeader>
  );
};

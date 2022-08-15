import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BottomNavigationAction } from '@mui/material';

import { StyledBottomNavigation } from './styles';
import { INavigationMenuOption } from '../header';

interface IProps {
  navigationMenuOptions: INavigationMenuOption[];
}

export const NavigationMenu: FC<IProps> = ({ navigationMenuOptions }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledBottomNavigation showLabels>
      {navigationMenuOptions.map(({ path, label }) => {
        const isLinkSelected = path === location.pathname;

        return (
          <BottomNavigationAction
            showLabel
            key={path}
            onClick={() => navigate(path)}
            label={label}
            className={isLinkSelected ? 'Mui-selected' : undefined}
          />
        );
      })}
    </StyledBottomNavigation>
  );
};

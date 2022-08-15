import React, { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useModalProps } from '@dkr-web/common/hooks';

import { StyledBurgerMenuHeaderDiv, StyledBurgerMenuToolbar, StyledNavigationMenuDiv } from './styles';
import { NavigationMenu } from './navigation-menu';
import { INavigationMenuOption } from '../header';
import { HeaderLogo } from './logo';

interface IProps {
  navigationMenuOptions: INavigationMenuOption[];
}

export const BurgerMenu: FC<IProps> = ({ navigationMenuOptions }) => {
  const { isOpen: isOpenMenu, close: closeMenu, open: openMenu } = useModalProps();

  return (
    <StyledBurgerMenuToolbar>
      <IconButton onClick={openMenu} edge='start' color='inherit' aria-label='menu' size='large'>
        <MenuIcon fontSize='large' />
      </IconButton>
      <Drawer anchor='left' open={isOpenMenu} onClose={closeMenu}>
        <StyledBurgerMenuHeaderDiv>
          <HeaderLogo />
          <IconButton onClick={closeMenu}>
            <CloseIcon fontSize='medium' />
          </IconButton>
        </StyledBurgerMenuHeaderDiv>
        <StyledNavigationMenuDiv>
          <NavigationMenu navigationMenuOptions={navigationMenuOptions} />
        </StyledNavigationMenuDiv>
      </Drawer>
    </StyledBurgerMenuToolbar>
  );
};

import HdIcon from '@mui/icons-material/Hd';
import { Link } from 'react-router-dom';

import { StyledLogoHeadline } from './styles';
import { RoutePath } from '../../../../navigation';

export const HeaderLogo = () => {
  return (
    <Link to={RoutePath.Home}>
      <StyledLogoHeadline>
        movies
        <HdIcon color='primary' />
      </StyledLogoHeadline>
    </Link>
  );
};

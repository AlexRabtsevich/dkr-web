import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';

import { SecondaryTextButton } from '@dkr-web/ui-kit';
import { RoutePath } from '@dkr-web/navigation';

interface IProps {
  wishListUuid: string;
}

export const WishListDetailsButton: FC<IProps> = ({ wishListUuid }) => {
  const navigate = useNavigate();

  return (
    <SecondaryTextButton
      onClick={() => navigate(`${RoutePath.WishList}/${wishListUuid}`)}
      startIcon={<VideoSettingsIcon fontSize='small' />}
    >
      Details
    </SecondaryTextButton>
  );
};

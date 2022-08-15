import { FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

import { useToggle } from '@dkr-web/common/hooks';
import { PrimaryHeadline, SecondaryTextButton, TextField } from '@dkr-web/ui-kit';

import { useUpdateWishList } from '../../../hooks';

interface IProps {
  wishListTitle: string;
  wishListUuid: string;
  onUpdated: (title: string) => void;
}

export const WishListTitle: FC<IProps> = ({ wishListUuid, wishListTitle, onUpdated }) => {
  const [isModeEditable, toggleMode] = useToggle();
  const [updateWishList] = useUpdateWishList();
  const [title, setTitle] = useState(wishListTitle);

  const onUpdate = useCallback(async () => {
    await updateWishList({ variables: { title, wishListUuid } });
    toggleMode();
    onUpdated(title);
  }, [onUpdated, title, toggleMode, updateWishList, wishListUuid]);

  return (
    <Box display='flex' alignItems='center'>
      {isModeEditable ? (
        <>
          <TextField onChange={(event) => setTitle(event.target.value)} value={title} />
          <SecondaryTextButton onClick={onUpdate} startIcon={<DoneIcon fontSize='small' />} />
        </>
      ) : (
        <>
          <PrimaryHeadline>{wishListTitle}</PrimaryHeadline>
          <SecondaryTextButton onClick={toggleMode} startIcon={<EditIcon fontSize='small' />} />
        </>
      )}
    </Box>
  );
};

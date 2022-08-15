import { FC, useCallback } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Dialog, Paragraph, SecondaryTextButton, useSuccessAlert } from '@dkr-web/ui-kit';
import { useModalProps } from '@dkr-web/common/hooks';

import { useDeleteWishList } from '../hooks';

export type OnWishListDeleted = () => void;

interface IProps {
  wishListUuid: string;
  onWishListDeleted?: OnWishListDeleted;
}

export const WishListDeletion: FC<IProps> = ({ wishListUuid, onWishListDeleted }) => {
  const { isOpen, close, open } = useModalProps();
  const [deleteWishList, { loading }] = useDeleteWishList();
  const showSuccessAlert = useSuccessAlert();

  const onConfirm = useCallback(async () => {
    deleteWishList({ variables: { wishListUuid } })
      .then(() => showSuccessAlert('This wish list was deleted successfully'))
      .finally(close)
      .finally(onWishListDeleted);
  }, [close, deleteWishList, onWishListDeleted, showSuccessAlert, wishListUuid]);

  return (
    <>
      <SecondaryTextButton onClick={open} startIcon={<DeleteForeverIcon fontSize='small' />}>
        Delete
      </SecondaryTextButton>
      {isOpen && (
        <Dialog
          isOpen={isOpen}
          isDisabledConfirmButton={loading}
          onConfirm={onConfirm}
          onClose={close}
          headerTitle='Delete wish list'
          confirmButtonLabel='Delete'
        >
          <Paragraph pt='2rem'>Are you sure want to delete this wish list?</Paragraph>
        </Dialog>
      )}
    </>
  );
};

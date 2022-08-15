import { FormProvider } from 'react-hook-form';
import { FC, useCallback } from 'react';
import { Box } from '@mui/material';

import { Dialog, PrimaryOutlinedButton } from '@dkr-web/ui-kit';
import { useModalProps } from '@dkr-web/common/hooks';
import { FormTextField } from '@dkr-web/form';

import { useWishListCreationForm, useWishListCreationSubmit } from './hooks';
import { OnWishListCreated } from './types';

interface IProps {
  onWishListCreated?: OnWishListCreated;
}

export const WishListCreation: FC<IProps> = ({ onWishListCreated }) => {
  const formMethods = useWishListCreationForm();
  const { handleSubmit, formState, reset } = formMethods;
  const { isOpen, open, close } = useModalProps();

  const resetAfterCreation = useCallback(() => {
    reset();
    close();
  }, [close, reset]);

  const submit = useWishListCreationSubmit(resetAfterCreation, onWishListCreated);

  return (
    <>
      <PrimaryOutlinedButton onClick={open}>Create wish list </PrimaryOutlinedButton>
      {isOpen && (
        <Dialog
          isOpen={isOpen}
          onClose={close}
          onConfirm={handleSubmit(submit)}
          isDisabledConfirmButton={formState.isSubmitting}
          headerTitle='Create wish list'
          confirmButtonLabel='Create'
        >
          <FormProvider {...formMethods}>
            <form>
              <Box marginTop='2rem'>
                <FormTextField label='Title of wish list' name='title' />
              </Box>
            </form>
          </FormProvider>
        </Dialog>
      )}
    </>
  );
};

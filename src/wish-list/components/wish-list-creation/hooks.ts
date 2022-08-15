import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useCallback } from 'react';

import { getStringValidationRule } from '@dkr-web/form';
import { useSuccessAlert } from '@dkr-web/ui-kit';

import { IWishListCreationForm, OnWishListCreated } from './types';
import { useCreateWishList } from '../../hooks';

const validationSchema: yup.SchemaOf<IWishListCreationForm> = yup.object().shape({
  title: getStringValidationRule(),
});

const resolver = yupResolver(validationSchema);

export const useWishListCreationForm = () => {
  return useForm<IWishListCreationForm>({ resolver });
};

export const useWishListCreationSubmit = (reset: () => void, onWishListCreated?: OnWishListCreated) => {
  const showSuccessAlert = useSuccessAlert();
  const [createWishList] = useCreateWishList();

  return useCallback(
    async ({ title }: IWishListCreationForm) => {
      const { data } = await createWishList({ variables: { title } });
      showSuccessAlert('Wish list ws create successfully');
      reset();

      if (data && onWishListCreated) {
        onWishListCreated?.(data.createWishList);
      }
    },
    [reset, createWishList, onWishListCreated, showSuccessAlert],
  );
};

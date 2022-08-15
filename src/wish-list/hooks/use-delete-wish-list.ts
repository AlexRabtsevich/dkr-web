import { useMutation } from '@apollo/client';

import { ISuccessData } from '@dkr-web/gql';

import { DELETE_WISH_LIST } from '../mutations';

export interface IUseDeleteWishVariables {
  wishListUuid: string;
}

export const useDeleteWishList = () => useMutation<ISuccessData, IUseDeleteWishVariables>(DELETE_WISH_LIST);

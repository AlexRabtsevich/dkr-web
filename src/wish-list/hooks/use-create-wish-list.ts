import { useMutation } from '@apollo/client';

import { CREATE_WISH_LIST } from '../mutations/create-wish-list';
import { IWishList } from '../typings';

export interface IUseCreateWishListData {
  createWishList: IWishList;
}

export interface IUseCreateWishVariables {
  title: string;
}

export const useCreateWishList = () => useMutation<IUseCreateWishListData, IUseCreateWishVariables>(CREATE_WISH_LIST);

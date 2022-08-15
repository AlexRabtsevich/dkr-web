import { useMutation } from '@apollo/client';

import { UPDATE_WISH_LIST } from '../mutations';
import { IWishList } from '../typings';

export interface IUseUpdateWishListData {
  wishList: IWishList;
}

export interface IUseUpdateWishListVariables {
  wishListUuid: string;
  title: string;
}

export const useUpdateWishList = () =>
  useMutation<IUseUpdateWishListData, IUseUpdateWishListVariables>(UPDATE_WISH_LIST);

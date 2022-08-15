import { IWishList } from '../../typings';

export interface IWishListCreationForm {
  title: string;
}

export type OnWishListCreated = (wishList: IWishList) => void;

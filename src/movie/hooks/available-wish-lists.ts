import { useQuery } from '@apollo/client';

import { GET_AVAILABLE_WISH_LISTS } from '../queries';
import { IWishList } from '../../wish-list/typings';

export interface IAvailableWishLists {
  results: Array<Pick<IWishList, 'title' | 'uuid'>>;
}

export interface IUseAvailableWishListsData {
  wishLists: IAvailableWishLists;
}
export const useAvailableWishLists = () => useQuery<IUseAvailableWishListsData>(GET_AVAILABLE_WISH_LISTS);

import { IMovie } from '@dkr-web/movie';

export interface IWishList {
  uuid: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

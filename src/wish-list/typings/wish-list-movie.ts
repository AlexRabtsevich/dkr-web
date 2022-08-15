import { IMovieDetails } from '@dkr-web/movie';

export interface IWishListMovie extends IMovieDetails {
  uuid: string;
  isWatched: boolean;
  createdAt: Date;
}

import { FC, Ref, useCallback } from 'react';
import { Popover } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useApolloClient } from '@apollo/client';

import { useAddMovieToWishList, useAvailableWishLists } from '@dkr-web/movie';
import { useAnchor } from '@dkr-web/common/hooks';
import { useErrorAlert, useSuccessAlert } from '@dkr-web/ui-kit';

import { AddToWatchlistButton } from './add-to-watchlist-button';
import { IAddMovieToWishListProps } from './add-movie-to-wish-list';
import { GET_WISH_LISTS } from '../../../wish-list/queries';

export const AvailableWishLists: FC<IAddMovieToWishListProps> = ({ movieId }) => {
  const { data } = useAvailableWishLists();
  const { setAnchor, removeAnchor, anchorElement } = useAnchor();
  const [addMovieToWishList] = useAddMovieToWishList();
  const showSuccessAlert = useSuccessAlert();
  const showErrorAlert = useErrorAlert();
  const client = useApolloClient();

  const onAdd = useCallback(
    async (wishListUuid: string) => {
      try {
        await addMovieToWishList({ variables: { wishListUuid, movieId: Number(movieId) } });
        showSuccessAlert('Movie was added');
        client.refetchQueries({ include: [GET_WISH_LISTS] });
      } catch (e) {
        showErrorAlert('This movie can not be added');
      }
    },
    [addMovieToWishList, client, movieId, showErrorAlert, showSuccessAlert],
  );

  return (
    <>
      <AddToWatchlistButton onClick={setAnchor} />
      <Popover open={!!anchorElement} anchorEl={anchorElement} onClose={removeAnchor}>
        <List>
          {data &&
            data.wishLists.results.map(({ title, uuid }) => (
              <ListItem sx={{ cursor: 'pointer' }} key={uuid} onClick={() => onAdd(uuid)}>
                {title}
              </ListItem>
            ))}
        </List>
      </Popover>
    </>
  );
};

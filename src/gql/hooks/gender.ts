import { useQuery } from '@apollo/client';

import { IGender } from '../../common/typings';
import { GET_GENDERS } from '../queries';

interface UseGendersData {
  genders: IGender[];
}

export const useGenders = () => {
  return useQuery<UseGendersData>(GET_GENDERS);
};

import { FormSelect } from '@dkr-web/form';
import { convertArrayToSelectData } from '@dkr-web/common/utils';
import { useGenders } from '@dkr-web/gql';

export const GenderFormSelect = () => {
  const { data } = useGenders();

  return (
    <FormSelect
      label='Gender'
      name='genderUuid'
      items={convertArrayToSelectData(data?.genders || [], ['name'], 'uuid')}
    />
  );
};

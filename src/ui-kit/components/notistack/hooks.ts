import { useSnackbar, VariantType } from 'notistack';
import { useMemo } from 'react';

const useAlert = (variant: VariantType) => {
  const { enqueueSnackbar } = useSnackbar();

  return useMemo(() => {
    return (message: string) => enqueueSnackbar(message, { variant });
  }, [enqueueSnackbar, variant]);
};

export const useSuccessAlert = () => useAlert('success');
export const useInfoAlert = () => useAlert('info');
export const useErrorAlert = () => useAlert('error');

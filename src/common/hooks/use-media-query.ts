import { useMediaQuery, useTheme } from '@mui/material';

export const useCheckDesktopMediaQuery = () => {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.up('md'));
};

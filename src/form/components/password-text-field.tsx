import { FC, useCallback, useMemo, useState } from 'react';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { FormTextField } from './text-field';

interface IProps {
  name: string;
  label: string;
}

export const PasswordTextField: FC<IProps> = ({ name, label }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const textFieldType = useMemo(() => (isPasswordVisible ? 'text' : 'password'), [isPasswordVisible]);

  const togglePasswordVisible = useCallback(() => setIsPasswordVisible((prevVisibleState) => !prevVisibleState), []);

  const passwordEyeIcon = useMemo(() => {
    return (
      <IconButton aria-label='toggle password visibility' onClick={togglePasswordVisible} edge='end' size='large'>
        {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </IconButton>
    );
  }, [isPasswordVisible, togglePasswordVisible]);

  return (
    <FormTextField name={name} label={label} InputProps={{ endAdornment: passwordEyeIcon, type: textFieldType }} />
  );
};

import * as yup from 'yup';

type ConfirmationPasswordRuleProps = {
  watchFieldName: string;
  requiredErrorMessage?: string;
  noEqualErrorMessage?: string;
};

const DEFAULT_REQUIRED_ERROR_MESSAGE = 'This field is required';

export const getStringValidationRule = (requiredMessage = DEFAULT_REQUIRED_ERROR_MESSAGE) =>
  yup.string().required(requiredMessage);

export const getEmailValidationRule = (
  invalidEmailMessage = 'This value is not a valid email address.',
  requiredErrorMessage = DEFAULT_REQUIRED_ERROR_MESSAGE,
) => yup.string().email(invalidEmailMessage).required(requiredErrorMessage);

export const getPasswordValidationRule = (
  requiredErrorMessage = DEFAULT_REQUIRED_ERROR_MESSAGE,
  formatErrorMessage = 'Password should contain uppercase and lowercase letters, numbers and special characters',
  minLengthErrorMessage = 'Your password must have minimum 8 characters',
) => {
  const MIN_LENGTH = 8;
  const VALIDATION_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/;

  return yup
    .string()
    .required(requiredErrorMessage)
    .min(MIN_LENGTH, minLengthErrorMessage)
    .matches(VALIDATION_PATTERN, formatErrorMessage);
};

export const getConfirmationPasswordRule = (props: ConfirmationPasswordRuleProps) => {
  const {
    watchFieldName,
    noEqualErrorMessage = 'Passwords not equal',
    requiredErrorMessage = DEFAULT_REQUIRED_ERROR_MESSAGE,
  } = props;

  return yup
    .string()
    .required(requiredErrorMessage)
    .oneOf([yup.ref(watchFieldName), null], noEqualErrorMessage);
};

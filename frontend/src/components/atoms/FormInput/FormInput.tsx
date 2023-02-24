import React, { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import * as SC from './FormInput.style';

type IFormInputProps = {
  name: string;
} & TextFieldProps;

const FormInput: FC<IFormInputProps> = ({ name, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <SC.TextField
          {...field}
          {...otherProps}
          label={name[0].toUpperCase() + name.slice(1)}
          type={name}
          placeholder={`Type your ${name}`}
          variant="outlined"
          sx={{ mb: '1.5rem' }}
          error={!!errors[name]}
          helperText={errors[name] ? (errors[name]?.message as unknown as string) : ''}
        />
      )}
    />
  );
};

export default FormInput;

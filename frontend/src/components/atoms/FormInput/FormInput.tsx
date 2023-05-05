/* eslint-disable indent */
import React, { FC, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import { CSSProperties } from 'styled-components';
import { IconComponent } from '@/components/common';
import { stringUtils } from '@/utils';
import * as SC from './FormInput.style';

type IFormInputProps = {
  name: string;
  styles?: CSSProperties;
} & TextFieldProps;

const FormInput: FC<IFormInputProps> = ({ name, styles, ...otherProps }) => {
  const [isShowValue, setIsShowValue] = useState(false);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleClickShowValue = () => {
    setIsShowValue((prev) => !prev);
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <SC.TextField
          {...field}
          {...otherProps}
          style={styles}
          label={stringUtils.prettyString(name)}
          type={isShowValue ? 'text' : name}
          placeholder={`Type your ${stringUtils.prettyString(name)}`}
          variant="outlined"
          sx={{ mb: '1.5rem' }}
          error={!!errors[name]}
          helperText={errors[name] ? (errors[name]?.message as unknown as string) : ''}
          InputProps={
            name === 'password'
              ? {
                  endAdornment: (
                    <SC.Eye position="end" onClick={handleClickShowValue}>
                      <IconComponent
                        name={isShowValue ? 'open_eye' : 'close_eye'}
                        style={{ fill: 'black' }}
                      />
                    </SC.Eye>
                  ),
                }
              : undefined
          }
        />
      )}
    />
  );
};

export default FormInput;

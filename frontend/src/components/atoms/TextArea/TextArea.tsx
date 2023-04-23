import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { CSSProperties } from 'styled-components';
import * as SC from './TextArea.style';

interface TextAreaProps {
  name: string;
  defaultValue?: string;
  styles?: CSSProperties;
}

const TextArea: FC<TextAreaProps> = ({ name, styles, defaultValue = '' }) => {
  const { register } = useFormContext();

  return (
    <SC.TextArea data-testid="testid" {...register(name, { value: defaultValue })} style={styles} />
  );
};

export default TextArea;

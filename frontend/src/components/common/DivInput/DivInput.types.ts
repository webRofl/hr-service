import { Difference } from '@/core';
import { CSSProperties, MutableRefObject } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

export interface NodeRef {
  nodeRef: MutableRefObject<HTMLDivElement> | null;
}

export interface DivInputProps {
  name: string;
  value: string;
  isEdit: boolean;
  isBlock?: boolean;
  divStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  commonStyle?: CSSProperties;
  containerStyle?: CSSProperties;
  readOnly?: boolean;
}

interface Field {
  field?: ControllerRenderProps<FieldValues, string>;
}

export type DefaultVariantProps = Difference<DivInputProps, 'isForm'> & NodeRef & Field;

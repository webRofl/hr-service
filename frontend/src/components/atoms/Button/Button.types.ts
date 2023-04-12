import { InsertProperties } from '@/core/types';
import { CommonColors } from '@/types';
import { ButtonTypeMap } from '@mui/material';
import { CSSProperties } from 'react';

interface CustomProps {
  label: string;
  isShowLabel?: boolean;
  iconName?: string;
  style?: CSSProperties;
  projectStyles?: boolean;
  isLoading?: boolean;
  badgeContent?: string | number;
  badgeColor?: CommonColors;

  onClick?: (event: MouseEvent) => void;
}

type MUIButtonProps = ButtonTypeMap<CustomProps>;

export type Props = InsertProperties<MUIButtonProps, 'props'>;

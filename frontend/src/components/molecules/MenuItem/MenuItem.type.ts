import { CommonColors, MUIButtonVariant } from '@/types';
import { CSSProperties } from 'react';

interface IOptionalProp {
  variant: MUIButtonVariant;
}

export interface IMenuItemProps {
  label: string;
  isShowLabel: boolean;
  iconName?: string;
  style?: CSSProperties | undefined;
  isLink?: boolean;
  badgeContent?: string | number;
  badgeColor?: CommonColors;
  optional?: Partial<IOptionalProp>;

  onClick?: () => void;
}

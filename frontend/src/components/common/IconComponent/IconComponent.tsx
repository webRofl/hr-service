import React, { CSSProperties, FC } from 'react';
import { ReactComponent as Cover } from 'assets/icons/github.svg';
import { useDynamicSVGImport } from '@/hooks';

interface IIconComponentProps {
  name: string;
  style?: CSSProperties;
  width?: string;
  height?: string;
  fill?: string;
}

const IconComponent: FC<IIconComponentProps> = ({ name, style, width, height, fill }) => {
  const defaultStyles = {
    width: width ?? 24,
    height: height ?? width ?? 24,
    fill: fill ?? 'white',
  };

  const { SvgIcon, isLoading, isError } = useDynamicSVGImport(name);

  if (isLoading) return null;

  if (isError) return <Cover style={{ ...defaultStyles, ...style }} />;

  return <SvgIcon style={{ ...defaultStyles, ...style }} />;
};

export default IconComponent;

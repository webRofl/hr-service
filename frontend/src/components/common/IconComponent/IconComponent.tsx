import React, { CSSProperties, FC } from 'react';
import { ReactComponent as Cover } from 'assets/icons/github.svg';
import { useDynamicSVGImport } from '@/hooks';

interface IIconComponentProps {
  name: string;
  style?: CSSProperties;
}

const defaultStyles = {
  width: 24,
  height: 24,
  fill: 'white',
};

const IconComponent: FC<IIconComponentProps> = ({ name, style }) => {
  const { SvgIcon, isLoading, isError } = useDynamicSVGImport(name);

  if (isLoading) return <div>loading...</div>;

  if (isError) return <Cover style={{ ...defaultStyles, ...style }} />;

  return <SvgIcon style={{ ...defaultStyles, ...style }} />;
};

export default IconComponent;

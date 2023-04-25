import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { CSSProperties } from 'styled-components';
import * as SC from './ImagePicker.style';

interface ImagePickerProps {
  name: string;
  customImageUrl?: string;
  style?: CSSProperties;

  onChange?: () => void;
}

const ImagePicker: FC<ImagePickerProps> = ({ name, onChange, customImageUrl, style }) => {
  const { register } = useFormContext();
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, []);

  useEffect(() => {
    setImageUrl(customImageUrl!);
  }, [customImageUrl]);

  const handleImageChange = (e: ChangeEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    setImageUrl(URL.createObjectURL((e.target as HTMLInputElement).files?.item(0)!));
    if (onChange) onChange();
  };

  return (
    <SC.Container imgLink={imageUrl} style={style}>
      <SC.Input type="file" {...register(name)} onChange={handleImageChange} alt="image picker" />
    </SC.Container>
  );
};

export default ImagePicker;

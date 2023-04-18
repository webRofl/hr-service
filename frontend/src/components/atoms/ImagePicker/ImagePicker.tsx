import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import * as SC from './ImagePicker.style';

interface ImagePickerProps {
  name: string;
  customImageUrl?: string;
  onChange?: () => void;
}

const ImagePicker: FC<ImagePickerProps> = ({ name, onChange, customImageUrl }) => {
  const { register } = useFormContext();
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, []);

  useEffect(() => {
    setImageUrl(customImageUrl);
  }, [customImageUrl]);

  const handleImageChange = (e: ChangeEvent) => {
    setImageUrl(URL.createObjectURL(e.target.files.item(0)));
    if (onChange) onChange();
  };

  return (
    <SC.Container imgLink={imageUrl}>
      <SC.Input type="file" {...register(name)} onChange={handleImageChange} alt="image picker" />
    </SC.Container>
  );
};

export default ImagePicker;

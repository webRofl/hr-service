import React, { ChangeEvent, FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import * as SC from './ImagePicker.style';

interface ImagePickerProps {
  name: string;
}

const ImagePicker: FC<ImagePickerProps> = ({ name }) => {
  const { register } = useFormContext();
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e: ChangeEvent) => {
    setImageUrl(URL.createObjectURL(e.target.files.item(0)));
  };

  return (
    <SC.Container imgLink={imageUrl}>
      <SC.Input type="file" {...register(name)} onChange={handleImageChange} alt="image picker" />
    </SC.Container>
  );
};

export default ImagePicker;

import React, { FC, useEffect, useState, useCallback } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { useFormContext } from 'react-hook-form';
import { ImagePicker } from '@/components/atoms';
import { useNotifications } from '@/hooks';
import { getCroppedImg } from '@/utils';
import { CSSProperties } from 'styled-components';
import * as SC from './ImagePickerWithCrop.style';

interface CropImageProps {
  name: string;
  aspect: [number, number];
  cropShape?: 'rect' | 'round';
  style?: CSSProperties;
  setImgLinkOutside?: (value: string) => void;
}

const ImagePickerWithCrop: FC<CropImageProps> = ({
  name,
  aspect,
  style,
  setImgLinkOutside,
  cropShape = 'rect',
}) => {
  const { watch, setValue } = useFormContext();
  const { createToast } = useNotifications();
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imgLink, setImgLink] = useState('');
  const [isImgHover, setIsImgHover] = useState(false);
  const [nonEditedFile, setNonEditedFile] = useState<File>();

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(`${name}-crop`);
    };
  }, []);

  useEffect(() => {
    if (setImgLinkOutside && imgLink.length > 0) {
      setImgLinkOutside(imgLink);
    }
  }, [imgLink]);

  const handleClickInput = () => {
    if (!nonEditedFile && watch(name)[0]) {
      setNonEditedFile(watch(name)[0]);
    }

    const file = nonEditedFile ?? watch(name)[0];
    setImgLink(URL.createObjectURL(file));
    setIsOpen(!isOpen);
  };

  const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleHoverInput = () => {
    setIsImgHover((prev) => !prev);
  };

  const handleClose = async () => {
    try {
      const [imageLink, croppedImg] = await getCroppedImg(imgLink, croppedAreaPixels!, 0);
      setImgLink(imageLink);
      setValue(name, croppedImg);
      setIsOpen(false);
    } catch {
      createToast('An error has occurred', { variant: 'error' });
    } finally {
      setIsImgHover(false);
    }
  };

  return (
    <>
      <SC.ImageContainer
        width={aspect[0]}
        height={aspect[1]}
        style={style}
        onMouseEnter={handleHoverInput}
        onMouseLeave={handleHoverInput}>
        <ImagePicker name={name} customImageUrl={imgLink} />
        <SC.ImageControl
          type="button"
          onClick={handleClickInput}
          value="edit"
          isVisible={isImgHover}
        />
      </SC.ImageContainer>
      <SC.ModalContainer open={isOpen}>
        <SC.ModalContent>
          <>
            <Cropper
              style={{ mediaStyle: style }}
              image={imgLink}
              crop={crop}
              zoom={zoom}
              aspect={aspect[0] / aspect[1]}
              cropShape={cropShape}
              showGrid={false}
              onZoomChange={setZoom}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
            />
            <SC.ModalCross onClick={handleClose}>x</SC.ModalCross>
          </>
        </SC.ModalContent>
      </SC.ModalContainer>
    </>
  );
};

export default ImagePickerWithCrop;

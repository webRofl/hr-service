import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Props as ButtonProps } from '@/components/atoms/Button/Button.types';
import { Button } from '@/components/atoms';
import * as SC from './ModalButton.style';

interface ModalButtonProps {
  isOpen?: boolean;
}

const ModalButton: FC<PropsWithChildren<ButtonProps & ModalButtonProps>> = ({
  children,
  isOpen,
  ...buttonProps
}) => {
  const [isOpenNative, setIsOpen] = useState(!!isOpen);

  useEffect(() => {
    setIsOpen(!!isOpen);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCloseNative = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button {...buttonProps} onClick={handleOpen} />
      <SC.ModalContainer open={isOpenNative}>
        <SC.ModalContent>
          {children}
          <SC.ModalCross onClick={handleCloseNative}>x</SC.ModalCross>
        </SC.ModalContent>
      </SC.ModalContainer>
    </>
  );
};

export default ModalButton;

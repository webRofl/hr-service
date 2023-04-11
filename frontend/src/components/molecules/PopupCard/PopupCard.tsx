import React, { FC, useState } from 'react';
import { Modal } from '@mui/material';
import { getRelativeTimeString } from '@/utils';
import * as SC from './PopupCard.style';

interface PopupCardProps {
  title: string;
  text: string;
  time: string;
}

const PopupCard: FC<PopupCardProps> = ({ title, text, time }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SC.Container onClick={handleOpen}>
        <SC.Title>{title}</SC.Title>
        <SC.Divider>{getRelativeTimeString(new Date(time).getTime())}</SC.Divider>
        <SC.Text>{text}</SC.Text>
      </SC.Container>
      <Modal open={isOpen} onClose={handleClose}>
        <SC.ModalContainer>
          <SC.ModalContent>
            <SC.ModalTitle>{title}</SC.ModalTitle>
            <SC.Divider>{getRelativeTimeString(new Date(time).getTime())}</SC.Divider>
            <div>{text}</div>
            <SC.ModalCross onClick={handleClose}>x</SC.ModalCross>
          </SC.ModalContent>
        </SC.ModalContainer>
      </Modal>
    </>
  );
};

export default PopupCard;

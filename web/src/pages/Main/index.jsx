import React, { useState } from 'react';
import { Content, Modal, Navigation } from '../../components';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Modal isOpen={showModal} handleCloseModal={handleCloseModal} />
      <Navigation handleOpenModal={handleOpenModal} />
      <Content />
    </div>
  );
};

export default Main;

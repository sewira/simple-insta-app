import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content, Modal, Navigation } from '../../components';
import { fetchImage } from '../../redux/actions/imageAction';
import { getAllImages, isLoading } from '../../redux/reducers/imageReducer';

const Main = () => {
  const dispatch = useDispatch();
  const image = useSelector(getAllImages);
  const loading = useSelector(isLoading);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    dispatch(fetchImage());
  }, []);

  return (
    <div>
      <Navigation handleOpenModal={handleOpenModal} />
      {loading ? (
        <h1 style={{ textAlign: 'center', marginTop: '120px' }}>Loading...</h1>
      ) : (
        <div>
          <Modal isOpen={showModal} handleCloseModal={handleCloseModal} />
          <Content image={image} />
        </div>
      )}
    </div>
  );
};

export default Main;

import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import ButtonUpload from '../assets/buttonUpload.png';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloseIcon from '@material-ui/icons/Close';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage, postImage } from '../../redux/actions/imageAction';
import { isSuccess, isLoading } from '../../redux/reducers/imageReducer';
import { useHistory } from 'react-router-dom';

const Modal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sukses = useSelector(isSuccess);
  const loading = useSelector(isLoading);

  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [imageName, setImageName] = useState('');

  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setPreviewImage(e.target.files);
    setImageName(e.target.files[0].name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('image', image, imageName);
    console.log(image, imageName);
    dispatch(postImage(formData));
  };

  useEffect(() => {
    if (sukses) {
      props.handleCloseModal();
    }
  }, [dispatch]);

  return (
    <div>
      <ReactModal
        isOpen={props.isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={props.handleCloseModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="header">
          <h2 className="title">New Upload</h2>
          <CloseIcon onClick={props.handleCloseModal} />
        </div>
        <div className="content">
          <div className="image-wrap">
            <img
              src={
                image === ''
                  ? ButtonUpload
                  : URL.createObjectURL(new Blob(previewImage))
              }
              alt="upload_photo"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
            {image && (
              <Button
                type="submit"
                variant="contained"
                color="default"
                endIcon={<CloudUploadIcon />}
              >
                Upload
              </Button>
            )}
          </form>
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;

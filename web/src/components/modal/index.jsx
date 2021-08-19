import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ButtonUpload from '../assets/buttonUpload.png';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloseIcon from '@material-ui/icons/Close';
import './style.scss';

const Modal = (props) => {
  const [image, setImage] = useState('');

  const handleChange = (e) => {
    setImage(e.target.files);
  };

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
                  : URL.createObjectURL(new Blob(image))
              }
              alt="upload_photo"
            />
          </div>

          <input
            className="input"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          {image && (
            <Button
              variant="contained"
              color="default"
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          )}
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;

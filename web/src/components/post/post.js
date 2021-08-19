import React from 'react';
import Upload from '../upload/upload';
import './post.scss';

const postImage = () => {
    return (
        <div className="postImage">
            <div className="postImage-container">
                <div className="choose-file-image">
                    <Upload />
                </div>
                <div className="put-caption">

                </div>
            </div>
        </div>
    );
};

export default postImage;
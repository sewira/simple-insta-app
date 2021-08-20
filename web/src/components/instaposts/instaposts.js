import React from 'react';
import './instaposts.scss';
// import axios from 'axios';
import { ReactComponent as Option } from '../assets/option.svg';
import { ReactComponent as Like } from '../assets/notifications.svg';
import { ReactComponent as Comment } from '../assets/comment.svg';
import { ReactComponent as Share } from '../assets/share.svg';
import { ReactComponent as Save } from '../assets/save.svg';
import { ReactComponent as Emoji } from '../assets/emoji.svg';

// const data = [
//   {
//     imageProfile: 'https://i.pravatar.cc/150?img=1',
//     username: 'maria',
//     image: 'https://i.pravatar.cc/600?img=1',
//     likes: '1234',
//     caption: 'Hola!',
//   },
// ];

function Instaposts(props) {
  return (
    <>
      {props.image.length > 0 ? (
        props.image.map((post, index) => (
          <div className="instaposts" key={index}>
            <div className="instaposts-container">
              <div className="insta-header">
                <img id="insta-imageProfile" src={post.images} alt="" />
                <h6 className="insta-username">Maria</h6>
                <div className="insta-option">
                  <Option />
                </div>
              </div>
              <div className="insta-image">
                <img className="insta-images" src={post.images} alt="" />
              </div>
              <div className="insta-icons">
                <Like />
                <div className="comment">
                  <Comment />
                </div>
                <div className="share">
                  <Share />
                </div>
                <div className="save">
                  <Save />
                </div>
              </div>
              <div className="insta-likes">
                <h6>{post.likes} likes</h6>
              </div>
              <div className="insta-caption">
                <p className="caption-username">Maria</p>
                <p className="caption">Keep Pratice</p>
              </div>
              <div className="insta-comment">
                <Emoji />
                <p className="add-comment"> Add Comment ... </p>
                <h6 className="send"> Send </h6>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No Image</h1>
      )}
    </>
  );
}

export default Instaposts;

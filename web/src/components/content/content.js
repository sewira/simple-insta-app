import React from 'react';
import Instaposts from '../instaposts/instaposts';
import Stories from '../stories/stories';
import './content.scss';

const Content = (props) => {
  return (
    <div className="content">
      <div className="content-container">
        <Stories />
        <Instaposts image={props.image} />
      </div>
    </div>
  );
};

export default Content;

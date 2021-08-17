import React from 'react';
import Instaposts from '../instaposts/instaposts';
import Stories from '../stories/stories';
import './content.scss';

const Content = () => {
    return (
        <div className="content">
            <div className="content-container">
                <Stories />
                <Instaposts />
            </div>


        </div>
    )
}

export default Content;


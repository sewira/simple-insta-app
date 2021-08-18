import React from 'react';
import './story.scss';

const Story = (props) => {
    return (
        <div className="story">
            <div className="image-border">
                <img className="imagestories" src={props.imagestories} alt="" width="60" height="60" />
            </div>
            <p className="username">{props.username}</p>
        </div>
    )
}

export default Story;


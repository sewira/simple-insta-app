import React from 'react';
import './story.scss';

const Story = (props) => {
    return (
        <div className="story">
            <img src={props.imagestories} alt="" width="50" height="50" />
            <p>{props.username}</p>
        </div>
    )
}

export default Story;


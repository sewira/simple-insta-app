import React from 'react';
import Story from '../story/story';
import './stories.scss';
import HorizontalScroll from 'react-scroll-horizontal';

const Stories = () => {
    return (
        <div className="stories">
            <HorizontalScroll className="scroll" reverseScroll={true}>
                <div className="stories-container">
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=1"
                        username="maria"
                    />
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=2"
                        username="maria"
                    />
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=3"
                        username="maria"
                    />
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=4"
                        username="maria"
                    />
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=5"
                        username="maria"
                    />
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=6"
                        username="maria"
                    />
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=7"
                        username="maria"
                    />
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=8"
                        username="maria"
                    />
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=9"
                        username="maria"
                    />
                    <Story
                        imagestories="https://i.pravatar.cc/150?img=10"
                        username="maria"
                    />
                </div>
            </HorizontalScroll>


        </div>
    )
}

export default Stories;


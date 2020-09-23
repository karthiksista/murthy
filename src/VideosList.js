import React from 'react';
import VideoItem from './VideoItem';

const VideosList = ({ titles }) => {
  return (
    <div className="video-list">
      {titles.map((title) => (
        <VideoItem title={title} />
      ))}
    </div>
  );
};

export default VideosList;

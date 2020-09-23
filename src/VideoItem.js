import React, { useState } from 'react';
import Spinner from 'react-spinkit';

const VideoItem = ({ title }) => {
  const [loading, setIsLoading] = useState(true);

  const videoSrc = `https://www.youtube.com/embed/${title.resourceId.videoId}`;

  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <div class="video-item">
      <h4 className="video-title">{title.title}</h4>
      {loading ? (
        <Spinner
          className="loading text-center"
          name="three-bounce"
          fadeIn="none"
        />
      ) : null}
      <iframe
        loading="lazy"
        onLoad={handleLoad}
        src={videoSrc}
        allowFullScreen
        title="Video player"
      />
    </div>
  );
};

export default VideoItem;

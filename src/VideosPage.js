import React, { useEffect, useState } from 'react';
import playlists from './youtube/playlists';
import youtube from './youtube/youtube';
import './App.css';
import VideosList from './VideosList';
const VideosPage = ({ children }) => {
  const [titles, setTitle] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await youtube.get('', {});
    console.log(response, 'woow');
    const playListId =
      response.data.items[0].contentDetails.relatedPlaylists.uploads;

    const playlistResponse = await playlists.get(
      '/playlistItems?part=snippet&playlistId=' + playListId,
      {}
    );
    const titles = playlistResponse.data.items.map((item) => item.snippet);
    setTitle(titles);
  };

  const nextPage = async () => {
    const response = await youtube.get('', {});
    console.log(response, 'woow');
    const playListId =
      response.data.items[0].contentDetails.relatedPlaylists.uploads;
    const playlistResponse = await playlists.get(
      '/playlistItems?part=snippet&playlistId=' + playListId,
      {}
    );
    console.log(playlistResponse, 'rey');
    const npToken = playlistResponse.data.nextPageToken;
    const nextPlaylistResponse = await playlists.get(
      '/playlistItems?part=snippet&playlistId=' +
        playListId +
        '&pageToken=' +
        npToken,
      {}
    );
    const newTitles = nextPlaylistResponse.data.items.map(
      (item) => item.snippet
    );
    setTitle(newTitles);
  };

  return (
    <>
      <VideosList titles={titles} />
      <button className="button" onClick={nextPage}>
        <span> Next </span>
      </button>
    </>
  );
};

export default VideosPage;

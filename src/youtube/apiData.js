import React, { useEffect } from 'react';
import playlists from './playlists';
import youtube from './youtube';
// Make sure the client is loaded and sign-in is complete before calling this method.

const ApiData = () => {
  const getList = async () => {
    const response = await youtube.get('', {});
    console.log(response, 'woow');
    const playListId =
      response.data.items[0].contentDetails.relatedPlaylists.uploads;
    const playlistResponse = await playlists.get(
      '/playlistItems?part=snippet&playlistId=' + playListId,
      {}
    );
    const videos = playlistResponse.data.items;
    console.log(playlistResponse, 'omg');
  };

  return (
    <div>
      <button onClick={getList}> Click Me</button>
    </div>
  );
};

export default ApiData;

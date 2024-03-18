import React from 'react';
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function VideosDatail() {
  const { youtube } = useYoutubeApi();
  return (
    <iframe
      id='ytplayer'
      type='text/html'
      width='720'
      height='405'
      src={`https://www.youtube.com/embed/${youtube.id}`}
      frameborder='0'
      allowfullscreen
    />
  );
}


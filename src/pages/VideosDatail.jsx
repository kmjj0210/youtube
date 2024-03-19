import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function VideosDatail() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery({
    queryKey: ["video", videoId],
    queryFn: () => youtube.videoInfo(videoId),
  });
  return (
    <div>
      {isLoading && <p>loading...</p>}
      {error && <p>error...</p>}
      <div>
        <iframe
          id='ytplayer'
          width='720'
          height='405'
          src={`https://www.youtube.com/embed/${videoId}`}
        />
        <p className='mt-5'>{data.snippet.title}</p>
        <div>
          채널썸네일
          <span>{data.snippet.channelTitle}</span>
        </div>
        <p>{data.snippet.description}</p>
      </div>
    </div>
  );
}


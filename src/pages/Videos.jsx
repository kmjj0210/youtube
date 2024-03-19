import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../componets/VideoCard";
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword)
  });
  return (
    <div>
      <p className='font-bold text-2xl mb-5'>
        Videos {keyword ? `🔎${keyword}` : "🔥"}
      </p>
      {isLoading && <p>loading...</p>}
      {error && <p>error...</p>}
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {videos && videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>
    </div>
  );
}

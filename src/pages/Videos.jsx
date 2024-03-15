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
    <div className='py-5'>
      <p className='font-bold text-2xl'>
        Videos {keyword ? `🔎${keyword}` : "🔥"}
      </p>
      {isLoading && "loading..."}
      {error && "error..."}
      <ul className='flex flex-wrap gap-x-4 gap-y-10 mt-5'>
        {videos &&
          videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>
    </div>
  );
}

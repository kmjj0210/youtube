import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../componets/VideoCard";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.search(keyword);
    },
  });
  return (
    <div className='py-5'>
      <p className='font-bold text-2xl'>
        Videos {keyword ? `🔎${keyword}` : "🔥"}
      </p>
      {isLoading && "loading..."}
      {error && "error..."}
      <ul>
        {videos &&
          videos.map((video) => <VideoCard key={video.id} video={video} />)}
      </ul>
    </div>
  );
}

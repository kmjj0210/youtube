import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function VideoCont() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery({
    queryKey: ["videos", videoId],
    queryFn: () => youtube.view(videoId),
  });
  return (
    <div className="md:col-span-2">
      {isLoading && <p>loading...</p>}
      {error && <p>error...{error.message}</p>}
      {data && (
        <div>
          <iframe
            id="ytplayer"
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
          />
          <p className="mt-5">{data.snippet.title}</p>
          <div>
            채널썸네일
            <span>{data.snippet.channelTitle}</span>
          </div>
          <p>{data.snippet.description}</p>
        </div>
      )}
    </div>
  );
}

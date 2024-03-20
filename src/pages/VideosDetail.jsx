import React from "react";
import VideoCont from "../componets/VideoCont";
import VideoList from "../componets/VideoList";

export default function VideosDetail() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <VideoCont />
      <VideoList />
    </div>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from "../components/VideoCard";
import FakeYoutube from '../api/fakeYoutube';
import Youtube from '../api/youtube';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.search(keyword)
    }
  })

  return (
    <div className='mt-5'>
      <p>Videos {keyword ? `🔎${keyword}` : '🔥'}</p>
      {isLoading && 'loading...'}
      {error && 'error...'}
      {videos && (
        <ul>
          {
            videos.map((video) => (<VideoCard key={video.id} video={video} />))
          }
        </ul>
      )}
    </div>
  );
}


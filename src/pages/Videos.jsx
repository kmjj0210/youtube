import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      axios.get(`/data/${keyword ? 'search' : 'popular'}.json`)
      .then(res => res.videos.items)
    }
      
  })
  return (
    <div className='py-5'>
      <p className='font-bold text-2xl'>Videos {keyword ? `🔎${keyword}` : '🔥'}</p>
      {isLoading && "loading..."}
      {error && "error..."}
      {videos}
    </div>
  );
}


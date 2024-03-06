import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['video'],
    queryFn: () =>
      axios
        .get('data/most_popuplar_videos.json')
        .then((res) => res.data.items),
  })

  if (isLoading) return 'Loading...'
  if (error) return 'error... ' + error.message

  return (
    <div className='mt-5'>
      Videos🔥
      {data.map((a) => (
        <p key={a.id}>{a.snippet.title}</p>
      ))}
    </div>
  );
}


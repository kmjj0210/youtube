import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('data/most_popuplar_videos.json')
        .then((res) => res.data.items),
  })

  if (isLoading) return 'Loading...'
  if (error) return 'error... ' + error.message

  const rendering = () => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(<p key={i}>{data[i].snippet.title}</p>);
    }
    return result;
  };

  return (
    <div className='mt-5'>
      Videos🔥
      {rendering()}
    </div>
  );
}


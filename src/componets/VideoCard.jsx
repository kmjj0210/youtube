import React from 'react';
import { formatDay } from "../util/date";

export default function VideoCard({ video }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <a href='#'>
        <img className='w-full' src={`${thumbnails.medium.url}`} alt={`${title}`} />
      </a>
      <p className='mt-4 mb-1.5 font-bold line-clamp-2'>{title}</p>
      <p className='text-sm opacity-80'>{channelTitle}</p>
      <p className='text-sm opacity-80'>{formatDay(publishedAt)}</p>
    </li>
  );
}


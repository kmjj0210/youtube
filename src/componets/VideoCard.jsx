import React from 'react';

export default function VideoCard({video}) {
  return (
    <li className='basis-[30%]'>
      <div className='rounded-xl overflow-hidden'>
        <img src={`${video.snippet.thumbnails.high.url}`} alt='' />
      </div>
      <p className='mt-4 mb-1.5 font-bold'>{video.snippet.title}</p>
      <p className='text-sm'>{video.snippet.channelTitle}</p>
      <p className='text-sm'>{video.snippet.publishedAt}</p>
    </li>
  );
}


import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  return (
    <div className='mt-5'>
      Videos🔥{keyword ? `🔎${keyword}` : null}
    </div>
  );
}


import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const getPopuplar = async () => {
  // await new Promise((r) => setTimeout(r, 500))
  let { data } = await axios.get('data/most_popuplar_videos.json')
  return data.items
}

const getKeyword = async () => {
  // await new Promise((r) => setTimeout(r, 500))
  let { data } = await axios.get('data/list_by_keywords.json')
  return data.items
}

export default function Videos() {
  const queryClient = useQueryClient();
  const { keyword } = useParams();

  const popuplarQuery = useQuery({
    queryKey: ['popuplar'],
    queryFn: getPopuplar,
  })

  const keywordQuery = useQuery({
    queryKey: ['keyword'],
    queryFn: getKeyword,
  })

  return (
    <div className='mt-5'>
      Videos🔥
      {
        keyword ?
          "있음" :
          "없음"
          // popuplarQuery.data.map((item) => (
          //   <p key={item.id}>{item.snippet.title}</p>
          // ))
      }
    </div>
  );
}


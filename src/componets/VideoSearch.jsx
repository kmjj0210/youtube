import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function VideoSearch() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      return
    }
    navigate(`/videos/${text}`);
  }

  useEffect(() => {
    setText(keyword || '')
  }, [keyword])
  
  return (
    <header className='pt-5 pb-10 border-b border-gray-300'>
      <div className='flex items-center mx-auto w-full max-w-screen-xl'>
        <Link to="/" className='flex items-center gap-2 font-bold text-2xl'>
          <FaYoutube className='text-brand'/><span>YouTube</span>
        </Link>
        <form
          className='flex mx-auto max-w-3xl w-full border border-gray-300 rounded-full overflow-hidden'
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id='searchId'
            className='px-5 py-2.5 w-full outline-none'
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder='검색'
          />
          <button className='px-5 py-2.5 text-2xl border-l border-gray-300 bg-gray-100'>
            <CiSearch />
          </button>
        </form>
      </div>
    </header>
  );
}


import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { useEffect } from 'react';

export default function VideosHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();
  const handleSubmit = (e) => { 
    e.preventDefault();
    if (text === "") { 
      return;
    };
    navigate(`/videos/${text}`);
  }
  useEffect(() => setText(keyword || ''),[keyword])
  return (
    <header className='pt-5 pb-10 border-b border-gray-300'>
      <div className='flex items-center mx-auto w-full'>
        <Link to="/" className="flex items-center gap-2">
          <FaYoutube className='text-3xl text-brand' />
          <span className='text-2xl font-bold'>Youtube</span>
        </Link>
        <form
          className='flex mx-auto max-w-3xl w-full border border-gray-300 rounded-full overflow-hidden'
          onSubmit={handleSubmit}
        >
          <input
            className='px-5 py-2.5 w-full outline-none'
            type="text"
            placeholder='검색'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className='px-5 py-2.5 text-2xl border-l border-gray-300 bg-gray-100'
          >
            <CiSearch />
          </button>
        </form>
      </div>
    </header>
  );
}


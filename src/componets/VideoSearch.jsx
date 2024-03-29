import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function VideoSearch() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className='pt-5 pb-10'>
      <div className='flex items-center mx-auto w-full max-w-screen-xl'>
        <Link to='/' className='flex items-center gap-1 font-bold text-2xl '>
          <span className='logo'>
            <FaYoutube className='text-primary' />
          </span>
          <span className='text-softly-100 tracking-tighter'>YouTube</span>
        </Link>
        <form
          className='flex mx-auto max-w-3xl w-full border-b border-softly-300'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            id='searchId'
            className='px-5 py-2.5 w-full outline-none bg-transparent bg-primary'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='검색'
          />
          <button className='px-5 py-2.5 text-2xl text-softly-300'>
            <CiSearch />
          </button>
        </form>
      </div>
    </header>
  );
}

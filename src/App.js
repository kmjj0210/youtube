import './App.css';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

export default function App() {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => { 
    e.preventDefault();
    if (text === "") { 
      return;
    };

    setText('');
  }
  return (
    <>
      <header className='p-2.5'>
        <form
          className='flex justify-center mx-auto items-center w-full'
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder='검색'
            value={text}
            onChange={handleChange}
            className='focus:outline-none'
          />
          <button className='w-20'>
            <CiSearch className='mx-auto' />
          </button>
        </form>
      </header>
      <Outlet/>
    </>
  );
}
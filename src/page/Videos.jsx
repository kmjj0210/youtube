import React from 'react';
import { CiSearch } from "react-icons/ci";

export default function Videos() {
  return (
    <div className='container mx-auto'>
      <header className='p-2.5'>
        <form className='flex justify-center mx-auto items-center w-full max-w-200'>
          <input
            type="text"
            placeholder='검색'
            className='focus:outline-none'
          />
          <button className='w-20'>
            <CiSearch />
          </button>
        </form>
      </header>
    </div>
  );
}


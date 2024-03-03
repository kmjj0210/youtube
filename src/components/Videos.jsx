import React from 'react';
import { Outlet } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

export default function Videos() {
  return (
    <div className='cont'>
      <header>
        <form>
          <input
            type="text"
            placeholder='검색'
          />
          <button>
            <CiSearch />
          </button>
        </form>
      </header>
      <Outlet />
    </div>
  );
}


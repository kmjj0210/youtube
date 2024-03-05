import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import VideosHeader from './components/VideosHeader';

export default function App() {
  
  return (
    <>
      <VideosHeader />
      <Outlet/>
    </>
  );
}
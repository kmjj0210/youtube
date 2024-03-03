import './App.css';
import { Routes, Route, BrowserRouter,Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Videos from './components/Videos';
import VideosDetail from './components/VideosDetail';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/videos' element={<Videos />}>
          <Route path='query' element={<div>검색조회</div>} />
          <Route path='watch/:id' element={<VideosDetail />} />
        </Route>
        <Route path="*" element={<Videos />} />
      </Routes>
    </>
  );
}
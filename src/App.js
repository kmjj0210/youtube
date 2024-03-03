import './App.css';
import { Routes, Route, BrowserRouter,Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Videos from './page/Videos';
import VideosDetail from './page/VideosDetail';

export default function App() {
  return (
    <>
      <Outlet/>
    </>
  );
}
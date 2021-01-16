import React from 'react';
import { Search } from '../search'
import './app.css';

export const App = () => {
  return (
    <div className='container'>
      <img src='https://i.imgur.com/xPiNm81.png' className='image' /> 
      <Search />
    </div>
  );
}

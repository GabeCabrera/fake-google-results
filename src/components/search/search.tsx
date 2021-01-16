
import React, { useState } from 'react';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Divider, TextField } from '@material-ui/core';
import './search.css';

export const Search = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handlePhraseChange = (newValue: any) => {
    setValue(newValue);
  }

  const handleArrayChange = (newValue: any) => {
    const array = newValue.split(',')
    setSuggestions(array);
  }

  const handleReset = () => {
    setValue('')
    setSuggestions([]);
  }

  return (
    <div className='search-container'>
      <div className='results-container'>
        <div className="search">
          <SearchOutlined className='icon' />
          <input className='searchbar' value={value} onChange={(e: any) => setValue(e.target.value)} />
          <svg className='voice' focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path><path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path><path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path><path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path></svg>
          <Divider orientation='vertical' className='vertical-divider' />
          <CloseOutlined className='close' onClick={handleReset} />
        </div>
        <Divider />
        {suggestions.map((item) => (
          <span className='results'>
            <SearchOutlined className='results-icon' />
            <p className='phrase'>{value}</p><p className='suggestion'>{` ${item}`}</p>
          </span>
        ))}
        <div className='flex-column'>
          <div className='flex-row'>
            <button className='google-button'>Google Search</button>
            <button className='google-button'>I'm Feeling Lucky</button>
          </div>
          <div className='report'>
            <a className='report-label' href='#'>Report inappropriate predictions</a>
          </div>
        </div>
      </div>

      <div className='inputs'>
        <h4>Search Term</h4>
        <TextField className='textfield' variant='outlined' value={value} onChange={(e: any) => handlePhraseChange(e.target.value)} />
        <h4>Fake Results (Separated by commas, no spaces)</h4>
        <TextField className='textfield' variant='outlined' value={suggestions} onChange={(e: any) => handleArrayChange(e.target.value)} />
      </div>
    </div>
  );
}

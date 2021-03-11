import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const APP_ID = 'f14c7402'
  const APP_KEYS = '02f9b8e790eb9df701a59e85acfab322'

 

  

  useEffect(() => {
    getRecipes();
  },[]);

  const getRecipes =  async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEYS}`,);
    const data = await response.json();
  } ;


  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text'></input>
        <button className='search-button' type='submit'>Search</button>
        
      </form>
    </div>
  );
}

export default App;

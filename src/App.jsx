import { useState } from 'react'

import Navigation from "./components/Navigation";
import SearchBar from './PAGES/Home/components/SearchBar';
import Hero from './PAGES/Home/components/Hero';
import Body from './PAGES/Home/components/Body';
import Product from './PAGES/Cards/Product';


import Login from './PAGES/Login/login';

function App() {
  const name = "Suminda"
  return (
    
      <main>
      <Navigation name={name}/>
      <SearchBar/>
      <Hero/>
      <Body/>
      
      
      
   

    </main>
  );
  
}

export default App;

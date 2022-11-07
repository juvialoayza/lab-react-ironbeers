import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './pages/Home'
import Header from './components/Header';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  
  return (
    <div className="App">
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers/>}/>
        <Route path="/beers/:beerId" element={<SingleBeer/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
      </Routes>



    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Header } from './features/Header/Header';
import Characters from './features/character/Characters';
// import { Character } from './features/character/Character';
// import './App.css';

function App() {
  return (
    <>
      <Header />
      <Characters/>
    </>
  );
}

export default App;

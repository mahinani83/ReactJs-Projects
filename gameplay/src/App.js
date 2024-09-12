import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Startgame from './components/Startgame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStart,setIsGameStarted] = useState(false)

  const toggle=()=>{
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
      {isGameStart ? <GamePlay /> : <Startgame toggle={toggle} />}
    
    </>
  );
}

export default App;

import React from 'react'
import Home from './components/Home'
import { useState } from 'react'
import GamePlay from './components/GamePlay'


const App = () => {

  const[isGameStarted, setIsGameStarted] =useState(false)
  const toggleGamePlay =() =>{
    setIsGameStarted((prev) => !prev);
  }


  return (
    <div>
    {
      isGameStarted ? <GamePlay/> : <Home toggle={toggleGamePlay}/>
    }
    </div>
  )
}

export default App

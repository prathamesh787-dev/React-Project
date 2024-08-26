import React, {useState} from 'react'
import Score from './Score'
import Numberselector from './Numberselector'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import Rules from './Rules'

const GamePlay = () => {
  const[score, setScore] = useState(0);
  const[selectedNumber, setSelectedNumber] = useState();
  const [currentDice,setcurrentDice]=useState(1);
  const [error,setError] = useState("");
  const [showrules,setShowrules] = useState(false);

  const resetScore = ()=>{
    setScore(0);
  }

  const genrateRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
};

const roledice =()=>{
  if(!selectedNumber){
    setError("you have not selectes any number");
    return;
  }

    const randomNumber = genrateRandomNumber(1,7);

    setcurrentDice((prev)=>randomNumber);

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev-2)
    }

    setSelectedNumber(undefined);
};

  const Maincontainer =styled.div `
  padding-top: 60px;
  .top_sec{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .pri-btn{
    color: black;
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    padding: 10px 18px;
    min-width: 220px;
    border: 2 px solid black;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid black;

  }
  .sec-btn{
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    padding: 10px 18px;
    min-width: 220px;
    font-size: 16px;
    cursor: pointer;
  }
  .error{
    color: red;
  }
  `;
  return (
    <Maincontainer>
        <div className='top_sec'>
        <Score score={score}/>
        <Numberselector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
        </div>
        <Rolldice
        currentDice={currentDice}
        roledice={roledice}
        />
        <div className='btn'>
          <button className='pri-btn' onClick={resetScore}>Reset</button>
          <button onClick={()=>setShowrules((prev)=>!prev)} className='sec-btn'>{
            showrules ? "Hide":"Show"} Rules</button>
        </div>
        {showrules&&<Rules/>}
        </Maincontainer>
  )
}

export default GamePlay

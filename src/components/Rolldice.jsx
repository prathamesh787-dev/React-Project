import React from 'react'
import styled from 'styled-components'

const Rolldice = ({roledice,currentDice}) => {

    const Dicecontainer= styled.div `
    margin-top:48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .dice{
        cursor: pointer;
    }


    p{
        font-size: 24px;
    }
    `;
  return (
    <Dicecontainer>
      <div className='dice' 
      onClick={roledice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt='dice_l'/>
      </div>
      <p>click on Dice to roll</p>
    </Dicecontainer>
  )
}

export default Rolldice

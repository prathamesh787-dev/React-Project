import React from 'react'
import styled from 'styled-components';

const Rules = () => {

    const RuleContainer=styled.div `
        max-width: 800px;
        margin: 0 auto;
        background-color: #fbf1f1;
        padding: 20px;
        margin-top: 40px;
        border-radius: 10px;

        
        
        h2{
            font-size: 24px;
           
        }
        .text{
            margin-top: 24px;
            j
        }
    `;
  return (
    <RuleContainer>
      <h2>How To Play a dice Game</h2>
      <div className='text'>
        <p>select any number</p>
        <p>click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice{" "}</p>
        <p>if you get wrong guess then 2 point will be deducted</p>
      </div>
    </RuleContainer>
  )
}

export default Rules

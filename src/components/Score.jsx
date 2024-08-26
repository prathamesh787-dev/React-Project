import React from 'react'
import styled from 'styled-components'

const Score = ({score}) => {

    const Scorecontainer=styled.div `
    text-align: center;
    max-width: 200px;
    h1{
        font-size:100px;
        line-height: 10px;

    }
    p{
        font-size: 24px;
        font-weight: 500px;
        line-height: 10px;
    }
    `;

  return (
    <Scorecontainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Scorecontainer>
  )
}

export default Score

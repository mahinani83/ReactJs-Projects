import React from 'react'
import styled from 'styled-components'
export default function ScoreBoard({score}) {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>   
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div`
       p{
        width: 135px;
        height: 36px;
        text-align: center;
        font-weight:500;
        font-size: 24px;
       }
       h1{
        font-weight: 500;
        font-size: 68px;
        text-align: center;
        height: 93px;
   
       }
    `

import React from 'react'
import styled from 'styled-components'

export default function ShowRules() {
  return (
    <Rules>
        <h1>How to play dice game</h1>
        <div>
            <p>1.Select any number</p>
            <p>2.Click on dice image</p>
            <p>3.after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>4.if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </Rules>
  )
}

const Rules = styled.div`
    padding: 10px;
    width: 400px;
    height: 198px;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    background-color: antiquewhite;
`

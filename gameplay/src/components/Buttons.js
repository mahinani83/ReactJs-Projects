import React from 'react'
import styled from 'styled-components'
export default function Buttons({setScore,setshowrule,showrule}) {
  const resethandler = () =>{
    setScore(0);
  }
  const showruleshandler =()=>{
    setshowrule(!showrule);
  }
  return (
    <AllButtons>
        <button className='reset'
          onClick={resethandler}
        >Reset</button>
        <button onClick={showruleshandler}>{showrule ? "hide rules" : "show rules"}</button>
    </ AllButtons>
  )
}

const AllButtons = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .reset{
      width:150px;
      height: 44px;
      background-color: white;
      color: black;
      border: 2px solid black;
      font-weight: 600;
      border-radius: 5px;
      &:hover{
        background-color: black;
        color: white;
        transition: 0.5s background ease-in;
      }
    }
    button{
      width:150px;
      height: 44px;
      background-color: black;
      color: white;
      border: 2px solid black;
      font-weight: 600;
      border-radius: 5px;
      &:hover{
        background-color: white;
        color: black;
        transition: 0.5s background ease-in;
      }
    }
`


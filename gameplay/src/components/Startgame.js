import React from 'react'
import styled from 'styled-components'


const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
  
  .diceimage{
    img{
      width: 649px;
      height: 522px;
    }

  }
  .content{
      display: flex;
      flex-direction:column;
      align-items: end;
      justify-content: center;
      width: 100%;
      height: 83vh;
      padding-right:30px;
      h1{
        width: 528px;
        height: 136px;
        text-align: center;
        font-size: 96px;
      }
      button{
        background-color: black;
        color: white;
        border-radius:5px;
        width:220px;
        height: 44px;
        position:relative;
        top: 100px;
      }
      button:hover{
        background-color: white;
        color: black;
        font-weight: 700;
        cursor: pointer;
        transition: 0.2s background-color ease-in;
      }
    }
  }



`


export default function Startgame({toggle}) {
  return (
    <Main>
      <div className='container'>
      <div className='diceimage'>
         <img src='assets/openingdice.png' alt="openingdice.png"/>
      </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <button onClick={toggle}>Play Now</button>
        </div>
        </div>
    </Main>
  )
}


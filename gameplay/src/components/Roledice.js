import React, { useState } from 'react'
import styled from 'styled-components'
import ShowRules from './ShowRules'
export default function Roledice({currentdice,setcurrentdice,roleDiceHandler,showrule}) {
    
   
   
  return (
    <Dicecontainer>
        <div className='container'>
        <img src={`assets/Dice_img/dice_${currentdice}.png`} alt='dice1.png' 
            onClick={roleDiceHandler}
        />
        {showrule ? <ShowRules /> : ""}
        </div>
        <p>Click on Dice to Roll</p>
        
    </Dicecontainer>
  )
}


const Dicecontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    .container{
        
        width: 800px;
        height: 240px;
        display: flex;
        justify-content: center;
        align-items:center;
        justify-content: space-between;
        position: relative;
        left: 160px;
        img{
            width: 200px;
            height: 200px;
            position: relative;
            left: 140px;
        }
        
    }

`


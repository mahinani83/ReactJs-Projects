import React from "react";
import styled from "styled-components";
import ScoreBoard from "./ScoreBoard";
import NumberSelector  from "./NumberSelector";
import Roledice from "./Roledice";
import Buttons from "./Buttons"
import { useState } from "react";
import ShowRules from "./ShowRules";




const Mainframe = styled.div`
  padding: 10px;
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aquamarine;
  .scoreboard {
    display: flex;
    align-items: center;
    justify-content:space-around;
    width: 100%;
    height: 7rem;
  }
  .numberselection {
    display: flex;
    flex-direction: column;
    align-items: center;
   
    .boxes{
        display: flex;
        align-items: center;
        gap: 24px;
        box{
            width: 72px;
            height: 72px;
        }
    }

  }

  .reset{
    background-color: white;
    color: black;

  }
`


export default function GamePlay() {
  const [selectNumber , setSelectNumber] = useState();
  const [currentdice,setcurrentdice] = useState(1);
  const [score,setScore] = useState(0);
  const [error,seterror] = useState();
  const [showrule,setshowrule] = useState(false);
  

  const roleDiceHandler=()=>{
    if(!selectNumber){
      seterror("error please select any number");
      return;
    }
    let randomNumber = randomNumberGenerater();
    setcurrentdice(randomNumber);
    
    if(selectNumber === randomNumber){
      setScore((prev)=> prev+selectNumber);
    }else{
      setScore((prev)=>prev-1);
    }
    setSelectNumber(undefined);
  }
  const randomNumberGenerater = () =>{
    return Math.floor((Math.random() * 6) + 1);
}
  
  return (
    <Mainframe>
      <div className="scoreboard">
        <ScoreBoard score={score} />
        <NumberSelector selectNumber={selectNumber} setSelectNumber={setSelectNumber} error={error} seterror = {seterror}/>
      </div>
      <Roledice currentdice={currentdice} setcurrentdice={setcurrentdice} roleDiceHandler={roleDiceHandler} randomNumberGenerater={randomNumberGenerater} showrule={showrule}/>
      <Buttons setScore={setScore} setshowrule={setshowrule} showrule={showrule}/>
    </Mainframe>
  );
}

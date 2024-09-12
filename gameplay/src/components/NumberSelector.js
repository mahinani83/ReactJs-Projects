import React, { useState } from 'react'
import styled from 'styled-components'
export default function NumberSelector({error,selectNumber,setSelectNumber,seterror}) {
    const diceNumbers = [1,2,3,4,5,6];
    // const [isSelected,setisSelected] = useState(false);
    const SelectNumberhandler= (value) =>{
      setSelectNumber(value);
      seterror("");
    }
    
  return (

    <Main>
        <p>{error}</p>
        <div className="numberselection">
          <div className="boxes">
            {diceNumbers.map((value, index) => (
              <Box 
              isSelected={(selectNumber === value)}
              onClick={()=>SelectNumberhandler(value)}
              key={index}
              >{value}</Box>
            ))}
          </div>
          
          <h2>select number</h2>
        </div>
    </Main>
   
  )
}

const Main = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: end;
    .numberselection{
        gap: 10px;
    }
    .boxes{
        display: flex;
        width: 100%;
        align-items: center;
        gap: 24px;
    }
    h2{
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: end;
    }
    p{
      width: 256px;
      height: 30px;
      color:red;
      font-size: 1rem;
    }
   
  
`
    const Box = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 53px;
        font-weight: bolder;
        height: 53px;
        cursor: pointer;
        border: 2px solid black;
        text-align: center;
        background-color: ${(props) => props.isSelected ? "black" : "white"};
        color: ${(props)=> props.isSelected ? "white" : "black" };
    
    `
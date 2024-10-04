import React from "react";
import styled from "styled-components";

export default function FootCards({ food, BASE_URL }) {
  return (
    <Container>
      {food?.map((item) => (
        <div key={item.name} className="item">
          <div className="img">
            <img src={BASE_URL + item.image} alt={item.image} />
          </div>
          <div className="item-info">
            <h2>{item.name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              similique laborum voluptas assumenda? Reiciendis amet mollitia au
            </p>
            <div id="price-btn">
            <button>{item.price}</button>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

// Styled components
const Container = styled.div`
  max-width: 90%;
  color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  /* height:calc(100% - 20px); */
  

  @media(max-width:500px){
    flex-direction: column;

  }
  

  .item{
    background-color: gray;
    max-width: calc((100% / 3));
    height: 180px;
    box-sizing: border-box;
    border: 2px solid red;
    display:flex;
    align-items: center;
   
    
    
    
    
    .item-info{
      margin:0;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items:  start;
      /* padding: 10px; */
      h2{
        text-align: center;
        color: #FF921C;
        margin: 0;
      }
      p{
        margin: 0;
      }
      #price-btn{
        display: flex;
        width: 80%;
        align-items: center;
        justify-content: end;
      }
      #price-btn button{
        margin: 0;
      color: white;
      height: 31px;
      width: 76px;
      border-radius: 5px;
      background-color: #ff4343;
      text-align: center;
      
      
      }
    }
    
  }



`;

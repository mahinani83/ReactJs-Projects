import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import FoodCards from "./components/Foodcards";
import { deAT } from "date-fns/locale/de-AT";
function App() {
  const BASE_URL = "http://localhost:9000";

  const [data, setData] = useState();
  const [serchResult, setSearchResult] = useState();
 

  


  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "LUNCH",
      type: "lunch",
    },

    {
      name: "Dinner",
      type: "dinner",
    },
  ];


  

  const searchFor = (e) => {
    let value = e.target.value;
    if (value === "") {
      setSearchResult(data);
      return;
    }

    const filter = data?.filter((food) => {
      return food.name.toLowerCase().includes(value.toLowerCase());
     
     
    });
    setSearchResult(filter);
    
  };

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setData(data);
        setSearchResult(data);
        console.log(data);
      } catch {
        console.log("fail to search");
      }
    };
    getData(BASE_URL);
  }, []);

  const buttonFilter = (e) =>{

    let btnValue = e.target.innerText;

    if(btnValue.toLowerCase() === "all"){
      setSearchResult(data);
      
      
      return;
    }

    let filter = data?.filter((food)=>{
      return food.type.toLowerCase().includes(btnValue.toLowerCase());
    })
    setSearchResult(filter);
   
  }

  return (
    <MainContainer>
      <TopContainer>
        <div className="top">
          <img src="./assets/brandlogo.png" alt="brandlogo" />
          <input
            type="text"
            placeholder="Search Food"
            id="searchfood"
            onChange={searchFor}
          />
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={buttonFilter}>All</button>
          <button className="filter-btn" onClick={buttonFilter}>BreakFast</button>
          <button className="filter-btn" onClick={buttonFilter}>Lunch</button>
          <button className="filter-btn" onClick={buttonFilter}>Dinner</button>
        </div>
      </TopContainer>
      <FoodCardContainer>
        <FoodCards food={serchResult} BASE_URL={BASE_URL} />
      </FoodCardContainer>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  background-color: #323343;
`;
const TopContainer = styled.div`
  padding: 30px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  

  .top {
    height: 60px;
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    @media(max-width:500px){
    flex-direction: column;
    input{
      margin:0px 0;
    }
  }

    input {
      width: 285px;
      height: 25px;
      border: 1.5px solid red;
      border-radius: 7px;
      background-color: transparent;
      color: white;
    }
  }

  .filter {
    min-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media(max-width:500px){
    flex-direction: column;
    gap:20px;
  }
    .filter-btn {
      color: white;
      height: 31px;
      width: 76px;
      border-radius: 5px;
      background-color: #ff4343;
      text-align: center;
      transition: 0.5s background ease-in;
      &:hover{
        box-shadow:5px 5px 5px gray;
        background-color:pink;
        color:black
      }

      border: 1px solid ${({isSelected})=>( isSelected ? "red":"blue")};
    }
  }
`;

const FoodCardContainer = styled.div`
  min-width: 500px;
  height: calc(100vh - 151px);
  background-image: url("./assets/bg.png");
  display: flex;
  align-items: center;
  justify-content: center;
`;

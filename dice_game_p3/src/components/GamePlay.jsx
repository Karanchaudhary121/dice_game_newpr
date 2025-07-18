import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import RoolDice from "./RoolDice"
import { useState } from "react"
 

const GamePlay = () => {
  const [score, setScore] = useState();

  const [selectedNumber,setSelectedNumber]= useState();
  const [currentDice, setCurrentDice] = useState(1);
  const generateRandomNumber = (min , max) => {
  console.log(Math.floor(Math.random() * (max - min) + min))
return Math.floor(Math.random() * (max - min) + min);
};

const roolDice  =  () => {

  const randomNumber = generateRandomNumber(1,7)
  setCurrentDice((prev)=> randomNumber)

}



  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore/>
        <NumberSelector selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}/>

      </div>
      <RoolDice currentDice={currentDice}
      setCurrentDice={setCurrentDice}/>

        

    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;

.top_section{
    display: flex;
    justify-content: space-around;
    align-items: center;

}
  


`
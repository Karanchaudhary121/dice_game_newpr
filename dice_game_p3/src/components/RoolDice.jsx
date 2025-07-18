
import styled from "styled-components"

const RoolDice = ({setCurrentDice,currentDice}) => {

const generateRandomNumber = (min , max) => {
  console.log(Math.floor(Math.random() * (max - min) + min))
return Math.floor(Math.random() * (max - min) + min);
};

const roolDice  =  () => {

  const randomNumber = generateRandomNumber(1,7)
  setCurrentDice((prev)=> randomNumber)

}


  return (
    <DiceContainer>
      <div className="dice"  onClick={roolDice}>
        <img src= {`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
   
  )
}

export default RoolDice

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
.p{
  font-size: 24px;
}
.dice{
  cursor: pointer;
}
  

`
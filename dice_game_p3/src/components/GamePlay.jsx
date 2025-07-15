import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import RoolDice from "./RoolDice"

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore/>
        <NumberSelector/>

      </div>
      <RoolDice/>

        

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
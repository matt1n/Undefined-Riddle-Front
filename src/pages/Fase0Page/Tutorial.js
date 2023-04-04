import styled from "styled-components"
import {CgCloseR, CgChevronLeftR, CgChevronRightR} from "react-icons/cg"
import { useState } from "react"

export default function Tutorial({setTutorial}){
    const [tutorialCounter, setTutorialCounter] = useState(1)
    
    function tutorialStep(step){
        switch (step) {
            case 1 :
                return (<Position1><p>Imagens podem ser dicas e talvez até respostas</p></Position1>);
            case 2 :
                return (<Position2>O mesmo vale para os textos</Position2>);
            case 3 :
                return (<Position3>Quando souber da resposta, responda aqui </Position3>);
            case 4 :
                return (<Position4>Nem tudo que você vai precisar estará na página, fique de olho na url, na aba e não hesite em pesquisar, nada aqui depende de conhecimento prévio</Position4>);
            default :
                return undefined
        }
    }

    return(
        <>
        {(tutorialCounter!==5 )&& <TutorialContainer>
          <CloseIcon size={40} color={"#fff"} onClick={()=> setTutorial(false)}/>
          {tutorialCounter && tutorialStep(tutorialCounter)}
          {tutorialCounter!==1 && <BackIcon size={40} color={"#fff"} onClick={()=> setTutorialCounter(tutorialCounter-1)}/>}
          <NextIcon size={40} color={"#fff"} onClick={()=> setTutorialCounter(tutorialCounter+1)}/>
        </TutorialContainer>}
        </>
    )
}

const Position1 = styled.div`
  width: 230px;
  position: relative;
  height: 60px;
  margin: 340px 0 0 0px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 10px;

  ::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
    /*Aqui entra a cor da "aba" do balão */
    border-bottom: 20px solid aliceblue;
    top: -20px; /*localização. Experimente alterar para 'bottom'*/
    left: 42%;
}
`
const Position2 = styled(Position1)`
  margin: 285px 0 0 0px;
  ::after {
    border-bottom: none;
    border-top: 14px solid aliceblue;
    top: 60px; /*localização. Experimente alterar para 'bottom'*/
}
`
const Position3 = styled(Position1)`
  height: 60px;
  margin: 340px 0 0 0px;
  ::after {
    border-bottom: none;
    border-top: 14px solid aliceblue;
    top: 60px; /*localização. Experimente alterar para 'bottom'*/
}
`
const Position4 = styled(Position1)`
  height: 110px;
  margin: 30px 0 0 0px;
  ::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
    /*Aqui entra a cor da "aba" do balão */
    border-bottom: 20px solid aliceblue;
    top: -20px; /*localização. Experimente alterar para 'bottom'*/
    left: 42%;
}
`

const TutorialContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 3;
    background-color: #000000af;
    display: flex;
    justify-content: center;
`
const CloseIcon = styled(CgCloseR)`
    position: fixed;
    top: 10px;
    left: 10px;
`
const BackIcon = styled(CgChevronLeftR)`
    position: fixed;
    margin: 50vh 80vw 0 0;
`
const NextIcon = styled(CgChevronRightR)`
    position: fixed;
    bottom: center;
    margin: 50vh 0 0 80vw;
`
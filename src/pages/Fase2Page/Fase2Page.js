import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox } from "../../assets/styles/faseStyle";
import fios from "../../assets/imgs/Fios.png"
import styled from "styled-components";
import { Helmet } from "react-helmet";
import backgroundImg from "../../assets/imgs/background3.gif"


export default function Fase2Page() {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title >Esses fios estão estranhos</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
    <FaseContainer>
      <Title>#2</Title>
      <ImageBox>
        <Fase2Img src={fios}></Fase2Img>
      </ImageBox>
      <Text>Olhe mais de perto</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="samuel" && navigate("/wiki")}><a className="testing" data-text="Responder">Responder</a></Answer>
    </FaseContainer></FullscreenContainer>
    </>
  )
}

const Fase2Img = styled(FaseImage)`
  width: 480px;
  height: auto;
  
  @media (max-width: 600px) {
    width: 400px;
    height: auto;
  }
  @media(max-width: 400px) {
  width: 100%;
  height: auto;
}
`


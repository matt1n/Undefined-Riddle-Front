import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox } from "../../assets/styles/faseStyle";
import styled from "styled-components";
import Atlantis from "../../assets/imgs/Atlantis.png"
import { Helmet } from "react-helmet";
import backgroundImg from "../../assets/imgs/background3.gif"


export default function Fase4Page() {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title>Madonna stiacciato</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
    <FaseContainer>
      <Title>#4</Title>
      <ImageBox>
        <Fase4Image src={Atlantis}></Fase4Image>
      </ImageBox>
      <Text>Quem falta para a festa?</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="leonardo" && navigate("/fase5")}><a className="testing" data-text="Responder">Responder</a></Answer>
    </FaseContainer></FullscreenContainer>
    </>
  )
}

const Fase4Image = styled(FaseImage)`
width: auto;
height: 350px;
@media (max-width: 600px) {
    width: 400px;
    height: auto;
  }
  @media(max-width: 400px) {
  width: 100%;
  height: auto;
}
`
import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer } from "../../assets/styles/faseStyle";
import { Helmet } from "react-helmet";
import backgroundImg from "../../assets/imgs/fiosbrilholow.png"


export default function Fase1Page() {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title >elddir denifednU</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
      <FaseContainer>
        <Title>#1</Title>
        <FaseImage src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png"></FaseImage>
        <Text>Urbs Aeterna</Text>
        <Answer onClick={()=> window.prompt(`Resposta:`)==="roma" && navigate("/fase2")}>
          Responder
        </Answer>
      </FaseContainer></FullscreenContainer>
    </>
  )
}


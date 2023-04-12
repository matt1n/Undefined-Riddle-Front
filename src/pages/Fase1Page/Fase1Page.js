import { useNavigate } from "react-router-dom";
import { FaseContainer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox, Answer } from "../../assets/styles/faseStyle";
import { Helmet } from "react-helmet";
import backgroundImg from "../../assets/imgs/background3.gif"


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
        <ImageBox>
          <FaseImage src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png"></FaseImage>
        </ImageBox>
        <Text>Urbs Aeterna</Text>
        <Answer onClick={()=> window.prompt(`Resposta:`)==="roma" && navigate("/fase2")}>
          <a className="testing" data-text="Responder">Responder</a>
        </Answer>
      </FaseContainer></FullscreenContainer>
    </>
  )
}


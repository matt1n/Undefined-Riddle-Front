import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tutorial from "./Tutorial";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer } from "../../assets/styles/faseStyle";
import { Helmet } from "react-helmet";
import backgroundImg from "../../assets/imgs/fiosbrilholow.png"

export default function Fase0Page() {
  const [tutorial, setTutorial] = useState(true);
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title>Tutorial</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
      <FaseContainer>
        {tutorial && <Tutorial setTutorial={setTutorial}/>}
        <Title>#0</Title>
        <FaseImage src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f50e.png"></FaseImage>
        <Text>URL</Text>
        <Answer 
        onClick={()=> window.prompt(`Resposta:`)==="batata" && navigate("/amor")}>
          Responder
        </Answer>
      </FaseContainer></FullscreenContainer>
    </>
  )
}


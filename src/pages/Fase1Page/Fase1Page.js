import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title } from "../../assets/styles/faseStyle";
import { Helmet } from "react-helmet";

export default function Fase1Page() {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title >elddir denifednU</title>
    </Helmet>
    <FaseContainer>
      <Title>#1</Title>
      <FaseImage src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png"></FaseImage>
      <Text>Urbs Aeterna</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="roma" && navigate("/fase2")}>
        Responder
      </Answer>
    </FaseContainer></>
  )
}


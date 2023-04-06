import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title } from "../../assets/styles/faseStyle";
import styled from "styled-components";
import Atlantis from "../../assets/imgs/Atlantis.png"
import { Helmet } from "react-helmet";

export default function Fase4Page() {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title>Madonna stiacciato</title>
    </Helmet>
    <FaseContainer>
      <Title>#4</Title>
      <Fase4Image src={Atlantis}></Fase4Image>
      <Text>Quem falta para a festa?</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="leonardo" && navigate("/fase5")}>Responder</Answer>
    </FaseContainer>
    </>
  )
}

const Fase4Image = styled(FaseImage)`
width: auto;
height: 350px;
`
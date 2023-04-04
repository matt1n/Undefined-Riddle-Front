import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title } from "../../assets/styles/faseStyle";
import Anfitras from "../../assets/imgs/Anfitras.webp"
import styled from "styled-components";

export default function Fase4Page() {
  const navigate = useNavigate()
  return (
    <FaseContainer>
      <Title>#4</Title>
      <Fase4Image src={Anfitras}></Fase4Image>
      <Text>Aqui eu to pensando em usar Atlante Alfabeto</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="samuel" && navigate("/fase5")}>Responder</Answer>
    </FaseContainer>
  )
}

const Fase4Image = styled(FaseImage)`
  background-color: transparent;
`
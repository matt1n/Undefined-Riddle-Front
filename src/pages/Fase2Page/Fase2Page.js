import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title } from "../../assets/styles/faseStyle";
import fios from "../../assets/imgs/Fios.png"
import styled from "styled-components";
import { Helmet } from "react-helmet";

export default function Fase2Page() {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title >Esses fios estão estranhos</title>
    </Helmet>
    <FaseContainer>
      <Title>#2</Title>
      <Fase2Img src={fios}></Fase2Img>
      <Text>Olhe mais de perto</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="samuel" && navigate("/wiki")}>Responder</Answer>
    </FaseContainer>
    </>
  )
}

const Fase2Img = styled(FaseImage)`
  width: 480px;
  height: auto;
`


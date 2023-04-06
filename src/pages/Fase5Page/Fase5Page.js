import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaseContainer,Answer,FaseImage,Text,Title } from "../../assets/styles/faseStyle";
import cesar from "../../assets/imgs/Xjmvçõzn zh yznomjçjn Iph vmqjmzyj.jpeg"
import { Helmet } from "react-helmet";

export default function Fase5Page() {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title>22</title>
    </Helmet>
    <FaseContainer>
      <Title>#5</Title>
      <Fase5Img src={cesar}></Fase5Img>
      <Text>Iy ras wivme iwwe qypliv uyi glsve</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="erinias" && navigate("/fim")}>Responder</Answer>
    </FaseContainer>
    </>
  )
}

const Fase5Img = styled(FaseImage)`
width: 250px;
  height: auto;
`

  //filter: drop-shadow(1px 1px 4px red);
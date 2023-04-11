import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer } from "../../assets/styles/faseStyle";
import cesar from "../../assets/imgs/Xjmvçõzn zh yznomjçjn Iph vmqjmzyj.jpeg"
import { Helmet } from "react-helmet";
import backgroundImg from "../../assets/imgs/background3.gif"


export default function Fase5Page() {
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title>22</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
    <FaseContainer>
      <Title>#5</Title>
      <Fase5Img src={cesar}></Fase5Img>
      <Text>Iy ras wivme iwwe qypliv uyi glsve</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="erinias" && navigate("/fim")}>Responder</Answer>
    </FaseContainer></FullscreenContainer>
    </>
  )
}

const Fase5Img = styled(FaseImage)`
width: 250px;
  height: auto;
`

  //filter: drop-shadow(1px 1px 4px red);
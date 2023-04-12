import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox } from "../../assets/styles/faseStyle";
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
      <ImageBox>
        <Fase5Img src={cesar}></Fase5Img>
      </ImageBox>
      <TextFase5>Iy ras wivme iwwe qypliv uyi glsve</TextFase5>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="erinias" && navigate("/fim")}><a className="testing" data-text="Responder">Responder</a></Answer>
    </FaseContainer></FullscreenContainer>
    </>
  )
}

const Fase5Img = styled(FaseImage)`
  width: 250px;
  height: auto;
  
  @media (max-width: 600px) {
    height: 300px;
    width: auto;
  }
`

const TextFase5 = styled(Text)`
  padding: 0 5%;
`

  //filter: drop-shadow(1px 1px 4px red);
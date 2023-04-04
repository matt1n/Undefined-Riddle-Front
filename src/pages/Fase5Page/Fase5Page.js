import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Anfitras from "../../assets/imgs/Anfitras.webp"

//aba=3   nomeImg= 17 

export default function Fase5Page() {
  const navigate = useNavigate()
  return (
    <FaseContainer>
      <Title>#5</Title>
      <FaseImage src={Anfitras}></FaseImage>
      <Text>Aqui eu to pensando em usar Atlante Alfabeto</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="samuel" && navigate("/fim")}>Responder</Answer>
    </FaseContainer>
  )
}

const FaseContainer = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div `
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 50px;
` 
const FaseImage = styled.img `
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
  
  
  //filter: drop-shadow(1px 1px 4px red);
`
const Text = styled.div `
  font-size: 25px;
  color: #fff;
  margin-bottom: 30px;
`
const Answer = styled.button `
  
`


import styled from "styled-components";

export default function Fase2Page() {
  return (
    <FaseContainer>
      <Title>#2</Title>
      <FaseImage src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png"></FaseImage>
      <Text>Bota a imagem com morse e pensa</Text>
      <Answer>Responder</Answer>
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
  background-color: white;
  margin-bottom: 50px;
`
const Text = styled.div `
  font-size: 25px;
  color: #fff;
  margin-bottom: 30px;
`
const Answer = styled.button `
  
`


import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function EndPage() {
  const navigate = useNavigate();

  return (
    <EndContainer>
      <Congratulations>Parabéns por concluir o:</Congratulations>
      <Title>Undefined Riddle</Title>
      <Congratulations> E obrigado por jogar!!!</Congratulations>
    </EndContainer>
  )
}

const EndContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.div`
  color: white;
  font-weight: 700;
  font-size: 100px;
  text-align: center;
  margin-bottom: 60px;
`
const Congratulations = styled.div`
  color: white;
  font-weight: 700;
  font-size: 60px;
  text-align: center;
`

const Button = styled.button`
  height: 50px;
  width: 250px;
  margin-bottom: 7px;
`
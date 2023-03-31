import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Title>Undefined Riddle</Title>
      <Button onClick={()=> navigate("/batata")}>Começar</Button>
      <Button onClick={()=> navigate("/login")}>Sign-in</Button>
      <Button onClick={()=> navigate("/registro")}>Sign-up</Button>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
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
  margin-bottom: 15vh;
`
const Button = styled.button`
  height: 50px;
  width: 250px;
  margin-bottom: 7px;
`
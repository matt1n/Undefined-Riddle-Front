import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Start, Text2, Text3 } from "../../assets/styles/faseStyle";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <TextContainer>
        <Text2>
      <span aria-hidden="true">Undefined</span>
    Undefined
    <span aria-hidden="true">Undefined</span>
      </Text2>
      <Text3 title="Riddle">Riddle</Text3>
      </TextContainer>
      <Start onClick={()=> navigate("/batata")}>Começar</Start>
      <SignIn onClick={()=> navigate("/login")}>Login</SignIn>
      <SignUp onClick={()=> navigate("/registro")}>Registro</SignUp>
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

const SignIn = styled(Start)`

    &:after, &:before{
      content: 'Login';

  }
`
const SignUp = styled(Start)`

    &:after, &:before{
      content: 'Registro';
    }

`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15vh;
`
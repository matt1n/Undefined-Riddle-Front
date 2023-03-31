import styled from "styled-components"

export default function SignUp() {
  return (
    <SignUpContainer>
      <Title>Undefined Riddle</Title>
      <SignUpForm>
        <Input type={"email"} placeholder="Email"></Input>
        <Input type={"text"} placeholder="Nome"></Input>
        <Input type={"password"} placeholder="Senha"></Input>
        <Input type={"password"} placeholder="Confirme sua senha"></Input>
        <Button>Registrar</Button>
      </SignUpForm>
    </SignUpContainer>
  )
}

const SignUpContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  width: 250px;
  height: 30px;
  margin-bottom: 7px;
`
const Button = styled.button`
  margin-top: 13px;
  height: 30px;
`

const Title = styled.div`
  color: white;
  font-weight: 700;
  font-size: 100px;
  text-align: center;
  margin-bottom: 15vh;
`

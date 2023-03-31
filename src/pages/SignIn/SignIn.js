import styled from "styled-components"

export default function SignIn() {
  return (
    <SignInContainer>
      <Title>Undefined Riddle</Title>
      <SignUpForm>
        <Input type={"email"} placeholder="Email"></Input>
        <Input type={"password"} placeholder="Senha"></Input>
        <Button>Entrar</Button>
      </SignUpForm>
    </SignInContainer>
  )
}

const SignInContainer = styled.div`
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

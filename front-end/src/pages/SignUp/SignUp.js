import styled from "styled-components"
import { Start, Text2, Text3 } from "../../assets/styles/faseStyle"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

import useSignUp from "../../hooks/api/useSignUp";
import { TextContainer } from "../HomePage/HomePage";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate()

  const {signUp,signUpError} = useSignUp()

  async function submit(event){
    event.preventDefault()
    if (password!==confirm){
      alert("Senhas não coincidem")
    } else {
      try {
        await signUp(email, password)
        navigate("/login")
      } catch (error) {
        console.log(signUpError)
      }
    }
  }
  return (
    <SignUpContainer>
      <TextContainer>
        <Text2>
          <span aria-hidden="true">Undefined</span>
            Undefined
          <span aria-hidden="true">Undefined</span>
        </Text2>
        <Text3 title="Riddle">Riddle</Text3>
      </TextContainer>
      <SignUpForm onSubmit={submit}>
        <Input type={"email"} placeholder="Email" onChange={e=> setEmail(e.target.value)}></Input>
        <Input type={"password"} placeholder="Senha" onChange={e=> setPassword(e.target.value)}></Input>
        <Input type={"password"} placeholder="Confirme sua senha" onChange={e=> setConfirm(e.target.value)}></Input>
        <SignUpButton type="submit">Registrar</SignUpButton>
      </SignUpForm>
      <LoginRedirect onClick={()=> navigate("/login")}>Já tem um registro? Faça login</LoginRedirect>
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
 position: relative;
  width: 250px;
  height: 40px;
  margin-bottom: 12px;
  border-radius: 5px;
  border: none;
  &:hover {
    border: 1px solid #000000;
    animation: glitchy 0.5s ease infinite reverse, glitchyTop 0.5s ease infinite reverse, glitchyBotton 0.5s ease infinite reverse;
  }
  &:focus {
    animation: none;
  }
`
const SignUpButton = styled(Start)`
margin-top: 10px;
    &:after, &:before{
      content: 'Registrar';
    }

`
const LoginRedirect = styled.p`
margin-top: 10px;
  color: #fff;
  text-decoration: underline;
  &:hover{
    cursor: pointer;
  }
`
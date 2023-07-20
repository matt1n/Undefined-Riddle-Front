import styled from "styled-components"
import { Start, Text2, Text3 } from "../../assets/styles/faseStyle"
import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import useSignIn from "../../hooks/api/useSignIn"
import { TextContainer } from "../HomePage/HomePage"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const { signInError, signIn } = useSignIn();
  
  async function submit(event){
    event.preventDefault()

    try {
      const userData = await signIn(email, password)
      console.log(userData)
      localStorage.setItem("undefinedUser", userData.token)
      setUser(userData.token)
      navigate("/batata")
    } catch (error) {
      alert("email ou senha incorretos")
      console.log(signInError)
    }
  }

  return (

    <SignInContainer>
      <TextContainer>
        <Text2>
          <span aria-hidden="true">Undefined</span>
            Undefined
          <span aria-hidden="true">Undefined</span>
        </Text2>
        <Text3 title="Riddle">Riddle</Text3>
      </TextContainer>
      <SignInForm name="signin" onSubmit={submit}>
        <Input type={"email"} placeholder="Email" onChange={e=> setEmail(e.target.value)}></Input>
        <Input type={"password"} placeholder="Senha" onChange={e=> setPassword(e.target.value)}></Input>
        <SignInButton type="submit">Entrar</SignInButton>

      </SignInForm>
      <RegisterRedirect onClick={()=> navigate("/registro")}>Não está registrado? Registre-se</RegisterRedirect>
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

const SignInForm = styled.form`
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

const SignInButton = styled(Start)`
margin-top: 10px;
    &:after, &:before{
      content: 'Entrar';
    }

`
const RegisterRedirect = styled.p`
margin-top: 10px;
  color: #fff;
  text-decoration: underline;
  &:hover{
    cursor: pointer;
  }
`
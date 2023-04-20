import styled from "styled-components"
import { Start } from "../../assets/styles/faseStyle"
import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const url = process.env.REACT_APP_BACK_END_URL;
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  
  async function submit(event){
    event.preventDefault()

    try {
      const user = await axios.post(`${url}/users/signin`, {email,password})
      localStorage.setItem("undefinedUser", user.data.token)
      setUser(user.data.token)
      navigate("/batata")
    } catch (error) {
      alert("email ou senha incorretos")
      console.log(error.respose.data)
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
    animation: glitchy 0.5s ease infinite reverse, glitchTop 0.5s ease infinite reverse, glitchBotton 0.5s ease infinite reverse;
  }
  &:focus {
    animation: none;
  }
  @keyframes glitchy {
    0% {
    box-shadow: 0.15em 0 0 #00fffc, -0.1em -0.1em 0 #fc00ff,
      0.025em 0.1em 0 #fffc00;
      border: 1px solid #fffc00;
  }
  15% {
    box-shadow: 0.15em 0 0 #00fffc, -0.1em -0.1em 0 #fc00ff,
      0.025em 0.1em 0 #fffc00;
      border: 1px solid #00fffc;
  }
  16% {
    box-shadow: -0.15em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.15em -0.15em 0 #fffc00;
      border: 1px solid #fc00ff;
  }
  49% {
    box-shadow: -0.15em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.15em -0.15em 0 #fffc00;
      border: 1px solid #fffc00;
  }
  50% {
    box-shadow: 0.15em 0.035em 0 #00fffc, 0.1em 0 0 #fc00ff,
      0 -0.1em 0 #fffc00;
      border: 1px solid #00fffc;
  }
  99% {
    box-shadow: 0.15em 0.035em 0 #00fffc, 0.1em 0 0 #fc00ff,
      0 -0.1em 0 #fffc00;
      border: 1px solid #fc00ff;
  }
  100% {
    box-shadow: -0.15em 0 0 #00fffc, -0.025em -0.1em 0 #fc00ff,
      -0.1em -0.025em 0 #fffc00;
      border: 1px solid #fffc00;
  }
  }
@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}
@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}
`
const Text2 = styled.p`
  color: white;
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;

span {
  position: absolute;
  top: 0;
  left: 0;
}

span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
}
@media(max-width: 600px) {
  font-size: 3rem;
}
@media(max-width: 360px) {
  font-size: 2.5rem;
}
`

const Text3 = styled.div`
  animation: glitch 1s linear infinite;
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
  
  

@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}

:before,
:after{
  content: attr(title);
  position: absolute;
  left: 0;
}

:before{
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

:after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}
@media(max-width: 600px) {
  font-size: 3rem;
}
@media(max-width: 360px) {
  font-size: 2.5rem;
}
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15vh;
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
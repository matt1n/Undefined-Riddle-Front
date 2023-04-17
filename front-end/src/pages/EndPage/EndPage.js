import { useNavigate } from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import styled from "styled-components"
import { Start } from "../../assets/styles/faseStyle";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { HelmetProvider, Helmet } from "react-helmet-async";
import ErrorPage from "../ErrorPage/ErrorPage";
import Prompt from "../../components/Prompt";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function EndPage() {
  const navigate = useNavigate();

  const {user} = useContext(UserContext)
  const [permission, setPermission] = useState(false)
  const url = process.env.REACT_APP_API_BASE_URL
  const config = {
    headers: {
      Authorization: `Bearer ${user}`,
    },
  };
  async function permissionVerify(){
    if(!user){
      navigate("/login")
    }
    try {
      const res = await axios.get(`${url}/phases/end/6`, config)
      if (res.data==="next") {
        navigate("/obrigado")
      }
      setPermission(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const [answer, setAnswer] = useState(null)
  const [prompt, setPrompt] = useState(false)

  async function sendAnswer(event){
    event.preventDefault()
    if (answer) {
      try {
      await axios.post(`${url}/hall/eternize`, {name: answer}, config)
      navigate("/obrigado")
    } catch (error) {
      alert(error.response.data)
    }
  }
  }

  function activePrompt(){
    setAnswer(null)
    setPrompt(!prompt)
  }

  const [loading, setLoading] = useState(true)

  function renderPage(){
    if (loading){
      return <LoadingPage/>
    } else {
      return (
        permission ? <HelmetProvider>
      <Helmet>
        <title>Fim?</title>
      </Helmet>
    <EndContainer>
    {prompt && <Prompt prompt={prompt} sendAnswer={sendAnswer} setAnswer={setAnswer} activePrompt={activePrompt} end={true}></Prompt>}
      <Text2>
            <span aria-hidden="true">Responda uma última pergunta</span>
            Responda uma última pergunta
            <span aria-hidden="true">Responda uma última pergunta</span>
      </Text2>
      <Text2>
            <span aria-hidden="true">E me permita te eternizar</span>
            E me permita te eternizar
            <span aria-hidden="true">E me permita te eternizar</span>
      </Text2>
      <Text3 title="Quem é você?">Quem é você?</Text3>
      <Responder onClick={()=> activePrompt()}>Responder</Responder>
    </EndContainer>
    </HelmetProvider> : <ErrorPage/>
      )
    }
  } 

  useEffect(()=> {
    permissionVerify()
  },[])

  return (
    <>
    {renderPage()}
    </>
  )
}

const EndContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
const Text2 = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;
  margin-bottom: 20px;

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
    text-shadow: 0.1em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.1em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.1em -0.025em 0 #00fffc, 0.025em 0.1em 0 #fc00ff,
      -0.1em -0.1em 0 #fffc00;
  }
  49% {
    text-shadow: -0.1em -0.025em 0 #00fffc, 0.025em 0.1em 0 #fc00ff,
      -0.1em -0.1em 0 #fffc00;
  }
  50% {
    text-shadow: 0.1em 0.1em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.1em 0.1em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.1em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
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
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 40px;
  
  

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
@media(max-width: 400px) {
  font-size: 2.5rem;
}
`
const Responder = styled(Start)`
margin-top: 10px;
    &:after, &:before{
      content: 'Responder';
    }

`
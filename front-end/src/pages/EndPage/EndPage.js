import { useNavigate } from "react-router-dom"
import {useEffect, useState} from "react"
import styled from "styled-components"
import { Start, Text2, Text3 } from "../../assets/styles/faseStyle";
import axios from "axios";
import { HelmetProvider, Helmet } from "react-helmet-async";
import ErrorPage from "../ErrorPage/ErrorPage";
import Prompt from "../../components/Prompt";
import LoadingPage from "../LoadingPage/LoadingPage";
import useEndPhaseAuth from "../../hooks/api/useEndPhaseAuth";
import useToken from "../../hooks/useToken";

export default function EndPage() {
  const navigate = useNavigate();

  const user = useToken()
  const [permission, setPermission] = useState(false)
  const url = process.env.REACT_APP_BACK_END_URL
  const config = {
    headers: {
      Authorization: `Bearer ${user}`,
    },
  };

  const {endPhaseAuth,endPhaseAuthError,endPhaseAuthLoading} = useEndPhaseAuth()

  async function permissionVerify(){
    if(!user){
      navigate("/login")
    }
    try {
      const res = await endPhaseAuth(6)
      if (res==="next") {
        navigate("/obrigado")
      }
      setPermission(res)
    } catch (error) {
      console.log(endPhaseAuthError)
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

  function renderPage(){
    if (endPhaseAuthLoading){
      return <LoadingPage/>
    } else {
      return (
        permission ? <HelmetProvider>
      <Helmet>
        <title>Fim?</title>
      </Helmet>
    <EndContainer>
    {prompt && <Prompt prompt={prompt} sendAnswer={sendAnswer} setAnswer={setAnswer} activePrompt={activePrompt} end={true}></Prompt>}
      <Text>
            <span aria-hidden="true">Responda uma última pergunta</span>
            Responda uma última pergunta
            <span aria-hidden="true">Responda uma última pergunta</span>
      </Text>
      <Text>
            <span aria-hidden="true">E me permita te eternizar</span>
            E me permita te eternizar
            <span aria-hidden="true">E me permita te eternizar</span>
      </Text>
      <GlitchText3 title="Quem é você?">Quem é você?</GlitchText3>
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

const Text = styled(Text2)`
  font-size: 3rem;
  margin-bottom: 20px;
`

const GlitchText3 = styled(Text3)`
  font-size: 3rem;
  margin-bottom: 40px;

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
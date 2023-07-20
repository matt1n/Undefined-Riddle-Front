import { useNavigate } from "react-router-dom";
import { FaseContainer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox, Answer } from "../../assets/styles/faseStyle";
import { HelmetProvider, Helmet } from "react-helmet-async";
import backgroundImg from "../../assets/imgs/background3.gif"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import Prompt from "../../components/Prompt";
import LoadingPage from "../LoadingPage/LoadingPage";
import invert from "../../assets/imgs/Inverter.png"

import usePhaseAuth from "../../hooks/api/usePhaseAuth";
import useToken from "../../hooks/useToken";
import usePostAnswer from "../../hooks/api/useAnswer";


export default function Fase1Page() {
  const navigate = useNavigate()
  const user = useToken()
  const [permission, setPermission] = useState(false)
  const url = process.env.REACT_APP_BACK_END_URL
  const config = {
    headers: {
      Authorization: `Bearer ${user}`,
    },
  };

  const {phaseAuth,phaseAuthError,phaseAuthLoading} = usePhaseAuth()

  async function permissionVerify(){
    if(!user){
      navigate("/login")
    }
    try {
      const response = await phaseAuth(1)
      setPermission(response)
    } catch (error) {
      console.log(phaseAuthError)
    }
  }

  const {postAnswer, postAnswerError} = usePostAnswer()
  const [answer, setAnswer] = useState(null)
  const [prompt, setPrompt] = useState(false)

  async function sendAnswer(event){
    event.preventDefault()
    try {
      const response = await postAnswer(answer,1)
      if (response) {
        navigate("/fios")
      } else {
        setPrompt("error")
      }
    } catch (error) {
      console.log(postAnswerError)
    }
  }

  function activePrompt(){
    setAnswer(null)
    setPrompt(!prompt)
  }

  function renderPage(){
    if (phaseAuthLoading){
      return <LoadingPage/>
    } else {
      return (
        permission ? <HelmetProvider>
    <Helmet>
      <title >elddir denifednU</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
      <FaseContainer>
      {prompt && <Prompt prompt={prompt} sendAnswer={sendAnswer} setAnswer={setAnswer} activePrompt={activePrompt}></Prompt>}
        <Title>#1</Title>
        <ImageBox>
          <FaseImage src={invert}></FaseImage>
        </ImageBox>
        <Text>Urbs Aeterna</Text>
        <Answer onClick={()=> activePrompt()}>
          Responder
        </Answer>
      </FaseContainer>
      </FullscreenContainer>
    </HelmetProvider> : <ErrorPage/>
      )
    }
  } 

  useEffect(()=> {
    permissionVerify()
  },[permission])

  return (
    <>
      {renderPage()}
    </>
  )
}


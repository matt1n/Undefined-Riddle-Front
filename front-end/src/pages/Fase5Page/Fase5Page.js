import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox } from "../../assets/styles/faseStyle";
import styled from "styled-components";
import Atlantis from "../../assets/imgs/Atlantis.png"
import { HelmetProvider, Helmet } from "react-helmet-async";
import backgroundImg from "../../assets/imgs/background3.gif"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import Prompt from "../../components/Prompt";
import LoadingPage from "../LoadingPage/LoadingPage";

import usePhaseAuth from "../../hooks/api/usePhaseAuth";
import useToken from "../../hooks/useToken";
import usePostAnswer from "../../hooks/api/useAnswer";


export default function Fase4Page() {
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
      const res = await phaseAuth(5)
      setPermission(res)
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
      const response = await postAnswer(answer, 5)
      if (response) {
        navigate("/fim")
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
    <>
    <Helmet>
      <title>Madonna stiacciato</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
    <FaseContainer>
    {prompt && <Prompt prompt={prompt} sendAnswer={sendAnswer} setAnswer={setAnswer} activePrompt={activePrompt}></Prompt>}
      <Title>#5</Title>
      <ImageBox>
        <Fase4Image src={Atlantis}></Fase4Image>
      </ImageBox>
      <Text>Quem falta para a festa?</Text>
      <Answer onClick={()=> activePrompt()}>Responder</Answer>
    </FaseContainer></FullscreenContainer>
    </>
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

const Fase4Image = styled(FaseImage)`
width: auto;
height: 350px;
@media (max-width: 600px) {
    width: 400px;
    height: auto;
  }
  @media(max-width: 400px) {
  width: 100%;
  height: auto;
}
`
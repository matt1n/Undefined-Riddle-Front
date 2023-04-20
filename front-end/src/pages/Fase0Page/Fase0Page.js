import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tutorial from "./Tutorial";
import { FaseContainer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox, Answer } from "../../assets/styles/faseStyle";
import backgroundImg from "../../assets/imgs/background3.gif"
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";
import axios from "axios";
import {VscQuestion} from "react-icons/vsc"
import styled from "styled-components";
import Prompt from "../../components/Prompt";
import LoadingPage from "../LoadingPage/LoadingPage";
import magnifier from "../../assets/imgs/Lupa.png"

export default function Fase0Page() {
  const [tutorial, setTutorial] = useState(false);
  const [loading, setLoading] = useState(true)
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  const [permission, setPermission] = useState(false)
  const url = process.env.REACT_APP_BACK_END_URL
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
      const res = await axios.get(`${url}/phases/0`, config)
      setPermission(res.data)
      setLoading(false)
      if (!res.data) {
        navigate("/error")
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const [answer, setAnswer] = useState(null)
  const [prompt, setPrompt] = useState(false)

  async function sendAnswer(event){
    event.preventDefault()
    try {
      const response = await axios.post(`${url}/answers/0`, {answer}, config)
      if (response.data) {
        navigate("/amor")
      } else {
        setPrompt("error")
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  function activePrompt(){
    setAnswer(null)
    setPrompt(!prompt)
  }

  function renderPage(){
    if (loading){
      return <LoadingPage/>
    } else {
      return (
        (permission) && <HelmetProvider>
    <>
    <Helmet>
      <title>Tutorial</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
      <FaseContainer>
        {tutorial && <Tutorial setTutorial={setTutorial}/>}
        <ContainerTip onClick={()=> setTutorial(true)}>
          <VscQuestion color="white" size={45}></VscQuestion>
        </ContainerTip>
        {prompt && <Prompt prompt={prompt} sendAnswer={sendAnswer} setAnswer={setAnswer} activePrompt={activePrompt}></Prompt>}
        <Title>#0</Title>
        <ImageBox>
        <FaseImage src={magnifier}></FaseImage>
        </ImageBox>
        <Text>URL</Text>
        <Answer onClick={()=> activePrompt()}>
          Responder
        </Answer>
      </FaseContainer>
      </FullscreenContainer>
    </>
    </HelmetProvider>
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

const ContainerTip = styled.div`
  position: fixed;
  top: 10px;
  left: 18%;
  @media (max-width: 1150px) {
    left: 1%;
  }
`


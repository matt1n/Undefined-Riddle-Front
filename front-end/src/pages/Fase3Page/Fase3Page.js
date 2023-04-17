import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox } from "../../assets/styles/faseStyle";
import styled from "styled-components";
import { LightContext } from "../../contexts/LightContext";
import { HelmetProvider, Helmet } from "react-helmet-async";
import clicked from "../../assets/imgs/clickedbutton.png";
import backgroundImg from "../../assets/imgs/background3.gif"
import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
import { useEffect } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
import Prompt from "../../components/Prompt";
import LoadingPage from "../LoadingPage/LoadingPage";
import switchImg from "../../assets/imgs/Interruptor.png"


export default function Fase3Page() {
  const {light, setLight} = useContext(LightContext)
  const navigate = useNavigate()
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
      const res = await axios.get(`${url}/phases/3`, config)
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
    try {
      const response = await axios.post(`${url}/answers/3`, {answer}, config)
      if (response.data) {
        navigate("/13")
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

  const [loading, setLoading] = useState(true)

  function renderPage(){
    if (loading){
      return <LoadingPage/>
    } else {
      return (
        permission ? <HelmetProvider>
    <Helmet>
      <title >Não gosto desse nome</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
    <FaseContainer light={light}>
    {prompt && <Prompt prompt={prompt} sendAnswer={sendAnswer} setAnswer={setAnswer} activePrompt={activePrompt}></Prompt>}
      <Title light={light}>#3</Title>
      <ImageBox>
        <Fase3Img
          light={light}
          src={light ? clicked : switchImg}>
        </Fase3Img>
      </ImageBox>
      <LigthButton onClick={()=> setLight(!light)} ></LigthButton>
      <Text light={light}>{!light ? "299.792.458 m/s" : "14 59"}</Text>
      <Answer light={light} onClick={()=> activePrompt()}>Responder</Answer>
    </FaseContainer></FullscreenContainer>
    
    </HelmetProvider> : <ErrorPage/>
      )
    }
  } 

  useEffect(()=> {
    permissionVerify()
  },[permission])

  return (
    <>
    {renderPage()}</>
  )
}

const Fase3Img = styled(FaseImage)`
  background-color: transparent;
  position: relative;
  width: 300px;
  height: auto;
  filter: ${props=> props.light ? "drop-shadow(0px 0px 4px black)" : "drop-shadow(0px 0px 4px white)"}
` 

const LigthButton = styled.button`
  position: fixed;
  height: 50px;
  width: 93px;
  background-color: transparent;
  border: none;
  top: 262px;
  @media(max-width: 600px) {
  top: 242px;
}
@media(max-width: 360px) {
  top: 205px;
}
`
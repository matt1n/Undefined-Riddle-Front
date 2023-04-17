import { useNavigate } from "react-router-dom";
import { FaseContainer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox, Answer } from "../../assets/styles/faseStyle";
import { HelmetProvider, Helmet } from "react-helmet-async";
import backgroundImg from "../../assets/imgs/background3.gif"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ErrorPage from "../ErrorPage/ErrorPage";
import Prompt from "../../components/Prompt";
import LoadingPage from "../LoadingPage/LoadingPage";
import invert from "../../assets/imgs/Inverter.png"


export default function Fase1Page() {
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
      const res = await axios.get(`${url}/phases/1`, config)
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
      const response = await axios.post(`${url}/answers/1`, {answer}, config)
      if (response.data) {
        navigate("/fios")
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
    {renderPage()}</>
  )
}


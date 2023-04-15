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

export default function Fase0Page() {
  const [tutorial, setTutorial] = useState(true);
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
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
      const sim = await axios.get(`${url}/phases/0`, config)
      setPermission(sim.data)
      if (!sim.data) {
        navigate("/error")
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  async function answer(){
    const answer = window.prompt(`Resposta:`)
    try {
      const response = await axios.post(`${url}/answers/0`, {answer}, config)
      if (response.data) {
        navigate("/amor")
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(()=> {
    permissionVerify()
  },[permission])

  return (
    <>
    {permission && <HelmetProvider>
    <>
    <Helmet>
      <title>Tutorial</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
      <FaseContainer>
        {tutorial && <Tutorial setTutorial={setTutorial}/>}
        <Title>#0</Title>
        <ImageBox>
        <FaseImage src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f50e.png"></FaseImage>
        </ImageBox>
        <Text>URL</Text>
        <Answer onClick={()=> answer()}>
          Responder
        </Answer>
      </FaseContainer>
      </FullscreenContainer>
    </>
    </HelmetProvider>}</>
  )
}


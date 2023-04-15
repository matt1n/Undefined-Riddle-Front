import { useNavigate } from "react-router-dom";
import { FaseContainer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox, Answer } from "../../assets/styles/faseStyle";
import { HelmetProvider, Helmet } from "react-helmet-async";
import backgroundImg from "../../assets/imgs/background3.gif"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


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
      const sim = await axios.get(`${url}/phases/1`, config)
      console.log(sim)
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
      const response = await axios.post(`${url}/answers/1`, {answer}, config)
      if (response.data) {
        navigate("/fase2")
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
    <Helmet>
      <title >elddir denifednU</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
      <FaseContainer>
        <Title>#1</Title>
        <ImageBox>
          <FaseImage src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png"></FaseImage>
        </ImageBox>
        <Text>Urbs Aeterna</Text>
        <Answer onClick={()=> answer()}>
          Responder
        </Answer>
      </FaseContainer>
      </FullscreenContainer>
    </HelmetProvider>}</>
  )
}


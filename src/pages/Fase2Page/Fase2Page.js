import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox } from "../../assets/styles/faseStyle";
import fios from "../../assets/imgs/Fios.png"
import styled from "styled-components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import backgroundImg from "../../assets/imgs/background3.gif"
import { useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useState } from "react";


export default function Fase2Page() {
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
      const sim = await axios.get(`${url}/phases/2`, config)
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
      const response = await axios.post(`${url}/answers/2`, {answer}, config)
      if (response.data) {
        navigate("/wiki")
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
      <title >Esses fios estão estranhos</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
    <FaseContainer>
      <Title>#2</Title>
      <ImageBox>
        <Fase2Img src={fios}></Fase2Img>
      </ImageBox>
      <Text>Olhe mais de perto</Text>
      <Answer onClick={()=> answer()}>Responder</Answer>
    </FaseContainer></FullscreenContainer>
    </HelmetProvider>}</>
  )
}

const Fase2Img = styled(FaseImage)`
  width: 480px;
  height: auto;
  
  @media (max-width: 600px) {
    width: 400px;
    height: auto;
  }
  @media(max-width: 400px) {
  width: 100%;
  height: auto;
}
`


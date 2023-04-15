import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox } from "../../assets/styles/faseStyle";
import styled from "styled-components";
import Atlantis from "../../assets/imgs/Atlantis.png"
import { HelmetProvider, Helmet } from "react-helmet-async";
import backgroundImg from "../../assets/imgs/background3.gif"
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";


export default function Fase4Page() {
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
      const sim = await axios.get(`${url}/phases/4`, config)
      if (!sim.data) {
        navigate("/error")
      }
      setPermission(sim.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  async function answer(){
    const answer = window.prompt(`Resposta:`)
    try {
      const response = await axios.post(`${url}/answers/4`, {answer}, config)
      if (response.data) {
        navigate("/13")
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
      <title>Madonna stiacciato</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
    <FaseContainer>
      <Title>#4</Title>
      <ImageBox>
        <Fase4Image src={Atlantis}></Fase4Image>
      </ImageBox>
      <Text>Quem falta para a festa?</Text>
      <Answer onClick={()=> answer()}>Responder</Answer>
    </FaseContainer></FullscreenContainer>
    </>
    </HelmetProvider>}
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
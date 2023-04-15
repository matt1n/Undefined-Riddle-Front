import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaseContainer,Answer,FaseImage,Text,Title, Background, FullscreenContainer, ImageBox } from "../../assets/styles/faseStyle";
import cesar from "../../assets/imgs/Xjmvçõzn zh yznomjçjn Iph vmqjmzyj.jpeg"
import { HelmetProvider, Helmet } from "react-helmet-async";
import backgroundImg from "../../assets/imgs/background3.gif"
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";


export default function Fase5Page() {
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
      const sim = await axios.get(`${url}/phases/5`, config)
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
      const response = await axios.post(`${url}/answers/5`, {answer}, config)
      if (response.data) {
        navigate("/fim")
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
      <title>22</title>
    </Helmet>
    <Background src={backgroundImg}/>
    <FullscreenContainer>
    <FaseContainer>
      <Title>#5</Title>
      <ImageBox>
        <Fase5Img src={cesar}></Fase5Img>
      </ImageBox>
      <TextFase5>Iy ras wivme iwwe qypliv uyi glsve</TextFase5>
      <Answer onClick={()=> answer()}>Responder</Answer>
    </FaseContainer></FullscreenContainer>
    
    </HelmetProvider>}</>
  )
}

const Fase5Img = styled(FaseImage)`
  width: 250px;
  height: auto;
  
  @media (max-width: 600px) {
    height: 300px;
    width: auto;
  }
`

const TextFase5 = styled(Text)`
  padding: 0 5%;
`

  //filter: drop-shadow(1px 1px 4px red);
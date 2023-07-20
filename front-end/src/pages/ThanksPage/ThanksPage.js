import styled from "styled-components"
import { HelmetProvider, Helmet } from "react-helmet-async";
import {useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingPage from "../LoadingPage/LoadingPage";

import usePhaseAuth from "../../hooks/api/usePhaseAuth";
import useToken from "../../hooks/useToken";
import { Background, FaseContainer, FullscreenContainer, Text2, Text3 } from "../../assets/styles/faseStyle";
import { TextContainer } from "../HomePage/HomePage";
import backgroundImg from "../../assets/imgs/background3.gif"

export default function ThanksPage(){
  const [names, setNames] = useState([])
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
      const res = await phaseAuth(6)
      setPermission(res)
    } catch (error) {
      console.log(phaseAuthError)
    }
  }

  async function getNames(){
    try {
      const response = await axios.get(`${url}/hall`, config)
      setNames(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  function renderPage(){
    if (phaseAuthLoading){
      return <LoadingPage/>
    } else {
      return (
        permission ? <HelmetProvider>
        <Helmet>
          <title>
            Obrigado por jogar!
          </title>
        </Helmet>
        <BackgroundEnd src={backgroundImg}/>
        <FullscreenContainer>
        <ThanksContainer>
          <ThanksTextContainer>
            <GlitchText3 title="Agora, você faz parte dos">Agora, você faz parte dos</GlitchText3>
            <Text>
              <span aria-hidden="true">Eternizados</span>
              Eternizados
              <span aria-hidden="true">Eternizados</span>
            </Text>
          </ThanksTextContainer>
          <NamesContainer>
            <NamesBox>
              {names.map(name=> <Name>{name.name}</Name>)}
            </NamesBox>
          </NamesContainer>
        </ThanksContainer>
        </FullscreenContainer>
        </HelmetProvider> : <ErrorPage/>
      )
    }
  } 

  useEffect(()=> {
    permissionVerify()
    getNames()
  },[])
    return(
      <>
      {renderPage()}
        </>
    )
}

const ThanksContainer = styled(FaseContainer)`
  width: 70%;
  background-color: none;
  background: none;
  
  @media (max-width: 1150px) {
    background-color: none;
  }
`

const BackgroundEnd = styled(Background)`
@media(max-width: 1150px) {
  display: inherit;
}
`


const Text = styled(Text2)`
  font-size: 3rem;

@media(max-width: 450px) {
  font-size: 2rem;
}
@media(max-width: 360px) {
  font-size: 2rem;
}
`
const GlitchText3 = styled(Text3)`
  font-size: 3rem;
  margin-bottom: 10px;

@media(max-width: 700px){
    font-size: 2em;
  }
  @media(max-width: 600px) {
  font-size: 2rem;
  }
  @media(max-width: 460px){
    font-size: 1.3em;
  }
  @media(max-width: 360px) {
  font-size: 1.3em;
}
`
const ThanksTextContainer = styled(TextContainer)`
margin-top: 20px;
margin-bottom: 30px;
width: 100%;
`

const NamesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  max-height: 80vh;
`
const NamesBox = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 80vh;
`


const Name = styled.div`
 position: relative;
 border: 1px solid #fff;
 display: flex;
 align-items: center;
 padding: 10px 20px;
 font-size: 20px;
 word-wrap: break-word;
  margin-bottom: 12px;
  border-radius: 5px;
  color: #fff;
  margin: 10px;
  &:hover {
    border: 1px solid #000000;
    animation: glitchy 0.5s ease infinite reverse, glitchyTop 0.5s ease infinite reverse, glitchyBotton 0.5s ease infinite reverse;
  }
  &:focus {
    animation: none;
  }
`
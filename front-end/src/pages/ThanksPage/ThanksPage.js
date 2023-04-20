import styled from "styled-components"
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import ErrorPage from "../ErrorPage/ErrorPage";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function ThanksPage(){
  const [names, setNames] = useState([])
  const navigate = useNavigate()
  const {user} = useContext(UserContext)
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
      const res = await axios.get(`${url}/phases/6`, config)
      setPermission(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error.response.data)
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

  const [loading, setLoading] = useState(true)

  function renderPage(){
    if (loading){
      return <LoadingPage/>
    } else {
      return (
        permission ? <HelmetProvider>
        <Helmet>
          <title>
            Obrigado por jogar!
          </title>
        </Helmet>
        <ThanksContainer>
          <TextContainer>
            <Text3 title="Agora, você faz parte dos">Agora, você faz parte dos</Text3>
            <Text2>
              <span aria-hidden="true">Eternizados</span>
              Eternizados
              <span aria-hidden="true">Eternizados</span>
            </Text2>
          </TextContainer>
          <NamesContainer>
            <NamesBox>
              {names.map(name=> <Name>{name.name}</Name>)}
            </NamesBox>
          </NamesContainer>
        </ThanksContainer>
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

const ThanksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`


const Text2 = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;

span {
  position: absolute;
  top: 0;
  left: 0;
}

span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.1em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.1em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.1em -0.025em 0 #00fffc, 0.025em 0.1em 0 #fc00ff,
      -0.1em -0.1em 0 #fffc00;
  }
  49% {
    text-shadow: -0.1em -0.025em 0 #00fffc, 0.025em 0.1em 0 #fc00ff,
      -0.1em -0.1em 0 #fffc00;
  }
  50% {
    text-shadow: 0.1em 0.1em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.1em 0.1em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.1em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
  
}
@media(max-width: 600px) {
  font-size: 3rem;
}
@media(max-width: 450px) {
  font-size: 2rem;
}
`
const Text3 = styled.div`
  animation: glitch 1s linear infinite;
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  
  

@keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}

:before,
:after{
  content: attr(title);
  position: absolute;
  left: 0;
}

:before{
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

:after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}
@media(max-width: 700px){
    font-size: 2em;
  }
  @media(max-width: 460px){
    font-size: 1.3em;
  }
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
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
    animation: glitchy 0.5s ease infinite reverse, glitchTop 0.5s ease infinite reverse, glitchBotton 0.5s ease infinite reverse;
  }
  &:focus {
    animation: none;
  }
  @keyframes glitchy {
    0% {
    box-shadow: 0.15em 0 0 #00fffc, -0.1em -0.1em 0 #fc00ff,
      0.025em 0.1em 0 #fffc00;
      border: 1px solid #fffc00;
  }
  15% {
    box-shadow: 0.15em 0 0 #00fffc, -0.1em -0.1em 0 #fc00ff,
      0.025em 0.1em 0 #fffc00;
      border: 1px solid #00fffc;
  }
  16% {
    box-shadow: -0.15em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.15em -0.15em 0 #fffc00;
      border: 1px solid #fc00ff;
  }
  49% {
    box-shadow: -0.15em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.15em -0.15em 0 #fffc00;
      border: 1px solid #fffc00;
  }
  50% {
    box-shadow: 0.15em 0.035em 0 #00fffc, 0.1em 0 0 #fc00ff,
      0 -0.1em 0 #fffc00;
      border: 1px solid #00fffc;
  }
  99% {
    box-shadow: 0.15em 0.035em 0 #00fffc, 0.1em 0 0 #fc00ff,
      0 -0.1em 0 #fffc00;
      border: 1px solid #fc00ff;
  }
  100% {
    box-shadow: -0.15em 0 0 #00fffc, -0.025em -0.1em 0 #fc00ff,
      -0.1em -0.025em 0 #fffc00;
      border: 1px solid #fffc00;
  }
  }
@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}
@keyframes glitchBotom{
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}
`
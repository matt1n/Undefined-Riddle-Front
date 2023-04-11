import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Start } from "../../assets/styles/faseStyle";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Test><Text>
      <span aria-hidden="true">Undefined</span>
    Undefined
    <span aria-hidden="true">Undefined</span>
      </Text><Text3 title="Riddle">Riddle</Text3></Test>
      <Start onClick={()=> navigate("/batata")}><a class="testing" data-text="Começar">Começar</a></Start>
      <SignIn onClick={()=> navigate("/login")}><a class="testing" data-text="Começar">Sign-in</a></SignIn>
      <SignUp onClick={()=> navigate("/registro")}><a class="testing" data-text="Começar">Sign-up</a></SignUp>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Text = styled.p`
  color: white;
  font-size: 5rem;
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
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
}
`

const Text3 = styled.div`
  animation: glitch 1s linear infinite;
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
  
  

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
`

const SignIn = styled(Start)`
  .testing{
    &:after, &:before{
      content: 'Sign-in';
    }
  }
`
const SignUp = styled(Start)`
  .testing{
    &:after, &:before{
      content: 'Sign-up';
    }
  }
`

const Test = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15vh;
`
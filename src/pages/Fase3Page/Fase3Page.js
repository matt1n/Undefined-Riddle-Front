import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title } from "../../assets/styles/faseStyle";

export default function Fase3Page() {
  const navigate = useNavigate()
  const [light, setLight] = useState(false)
  return (
    <FaseContainer light={light}>
      <Title light={light}>#3</Title>
      <FaseImage 
        onClick={()=> setLight(!light)} 
        src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png">
      </FaseImage>
      <Text light={light}>299.792.458 m/s</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="samuel" && navigate("/fase4")}>Responder</Answer>
    </FaseContainer>
  )
}

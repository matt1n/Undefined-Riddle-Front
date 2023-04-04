import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title } from "../../assets/styles/faseStyle";

export default function Fase2Page() {
  const navigate = useNavigate()
  return (
    <FaseContainer>
      <Title>#2</Title>
      <FaseImage src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png"></FaseImage>
      <Text>Bota a imagem com morse e pensa</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="samuel" && navigate("/fase3")}>Responder</Answer>
    </FaseContainer>
  )
}


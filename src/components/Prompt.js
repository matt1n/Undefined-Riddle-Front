import styled from "styled-components"
import {IoCloseSharp} from "react-icons/io5"

export default function Prompt({prompt, sendAnswer, setAnswer, activePrompt, end}){
  return (
    <>
    <PromptPage onClick={()=> activePrompt()}>
    </PromptPage>
    {prompt === "error" 
    ? 
    <PrompContainer prompt={prompt}><IoCloseSharp color="red" size={80}/></PrompContainer>
    : 
    <PrompContainer>
        <p>{end ? "Como deseja ser esternizado?" : "Resposta:"}</p>
        <form onSubmit={sendAnswer}>
          <input onChange={e=> setAnswer(e.target.value)}></input>
          <button type="submit">Responder</button>
        </form>
      </PrompContainer>}
    </>
)
}

const PromptPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  background-color: #000000af;
`

const PrompContainer = styled.div`
max-width: 380px;
min-width: 320px;
  padding: ${props=> props.prompt==="error" ? "25px 25px" : "50px 80px"};
  border: 1px solid #fff;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    z-index: 4;
  p{
    color: #fff;
    margin-bottom: 10px;
  }
  input{
    width: 100%;
    margin-bottom: 20px;
    height: 30px;
  }
  button{
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    background-color: transparent;

    &:hover{
      transition: all 0.4s;
      background-color: #fff;
      color: #000;
    }
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
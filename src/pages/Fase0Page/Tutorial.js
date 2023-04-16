import styled from "styled-components"
import {CgCloseR} from "react-icons/cg"
import { useState } from "react"

export default function Tutorial({setTutorial}){
    
    return(
        <>
        <TutorialContainer>
          
          <Lista>
            <CloseIcon size={35} color={"#fff"} onClick={()=> setTutorial(false)}/>
            <li>• Imagem, texto, URL, nome da aba, tudo pode ser uma dica.</li>
            <li>• A resposta sempre será uma palavra, minúscula e sem acentos.</li>
            <li>• Fique a vontade para baixar alguma imagem quando precisar!</li>
            <li>• Você não precisa saber tudo! Fique a vontade para pesquisar e explorar cada pista como quiser!</li>
            <li>• Lembre-se de anotar as respostas que descobrir.</li>
            <li>• Divirta-se ;3</li>
          </Lista>
        </TutorialContainer>
        </>
    )
}

const TutorialContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 3;
    background-color: #000000af;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CloseIcon = styled(CgCloseR)`
    position: absolute;
    top: 5%;
    right: 2%;
    @media(max-height: 800px) {
      top: 2%;
    }
`
const Lista = styled.ul`
    border: 1px solid #fff;
    border-radius: 40px;
    background-color: #000;
    color: #fff;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    height: 50%;
    padding: 0 20px;
    li{
        font-size: 20px;
        margin-bottom: 10px;
    }
    
    @media(max-height: 800px) {
      height: 100%;
      border: none;

    }
`
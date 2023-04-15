import styled from "styled-components"
import {TfiMenu} from "react-icons/tfi"
import { useContext } from "react"
import { MenuContext } from "../contexts/MenuContext";
import { LightContext } from "../contexts/LightContext";
import { useHref } from "react-router-dom";

export default function Menu(){
    const href = useHref()
    const { menuActive, setMenuActive } = useContext(MenuContext);
    const {light} = useContext(LightContext)
    function sim(){
        if (href!=="/" && href!=="/login" && href!=="/registro" && href!=="/fim" && href!=="/trasfigurazione") {
            return <TfiMenu size={45} color={href === "/wiki" ? !light ? "#fff" : "#000" : "#fff"}/>
        }
    }
    return (
        <ContainerMenu onClick={()=> setMenuActive(!menuActive)}>
            {sim()}
        </ContainerMenu>
    )
}

const ContainerMenu = styled.div`
    position: fixed;
    top: 10px;
    right: 18%;
    @media (max-width: 1150px) {
    right: 1%;
  }
`
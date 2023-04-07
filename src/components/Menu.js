import styled from "styled-components"
import {TfiMenu} from "react-icons/tfi"
import { useContext, useState } from "react"
import { MenuContext } from "../contexts/MenuContext";
import { LightContext } from "../contexts/LightContext";
import { useHref } from "react-router-dom";

export default function Menu(){
    const href = useHref()
    const { menuActive, setMenuActive } = useContext(MenuContext);
    const {light} = useContext(LightContext)
    return (
        <ContainerMenu onClick={()=> setMenuActive(!menuActive)}>
            {href!=="/trasfigurazione" && <TfiMenu size={45} color={href === "/wiki" ? !light ? "#fff" : "#000" : "#fff"}/>}
        </ContainerMenu>
    )
}

const ContainerMenu = styled.div`
    position: fixed;
    top: 10px;
    right: 16%;
`
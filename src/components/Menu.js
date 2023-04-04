import styled from "styled-components"
import {TfiMenu} from "react-icons/tfi"
import { useContext, useState } from "react"
import { MenuContext } from "../contexts/MenuContext";

export default function Menu(){
    const { menuActive, setMenuActive } = useContext(MenuContext);
    return (
        <ContainerMenu onClick={()=> setMenuActive(!menuActive)}>
            <TfiMenu size={45} color={"#fff"}/>
        </ContainerMenu>
    )
}

const ContainerMenu = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
`
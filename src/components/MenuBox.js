import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { MenuContext } from "../contexts/MenuContext"

export default function MenuBox() {
    const navigate = useNavigate()
    const {menuActive, setMenuActive} = useContext(MenuContext)
    const [fases, setFases] = useState(false)
    const [login, setLogin] = useState(false)
    return(
        <>
        <MenuScreen menuActive={menuActive} onClick={()=> (setMenuActive(!menuActive), setFases(false))}/>
        <MenuBoxContainer menuActive={menuActive}>
            <MenuBoxButton onClick={()=> setFases(!fases)}>Fases</MenuBoxButton>
            {fases && <>
                <MenuBoxButton onClick={()=> navigate("/batata")}>Fase 0</MenuBoxButton>
                <MenuBoxButton onClick={()=> navigate("/amor")}>Fase 1</MenuBoxButton>
                <MenuBoxButton onClick={()=> navigate("/fase2")}>Fase 2</MenuBoxButton>
                <MenuBoxButton onClick={()=> navigate("/fase3")}>Fase 3</MenuBoxButton>
                <MenuBoxButton onClick={()=> navigate("/fase4")}>Fase 4</MenuBoxButton>
                <MenuBoxButton onClick={()=> navigate("/fase5")}>Fase 5</MenuBoxButton>
            </>}
            <MenuBoxButton onClick={()=> setLogin(!login)}>{login ? "Logout" : "Login"}</MenuBoxButton>
        </MenuBoxContainer>
        </>
    )
};

const MenuScreen = styled.div`
  display: ${props=> !props.menuActive && "none" };
  position: fixed;
  width: 100%;
  height: 100%;
`

const MenuBoxContainer = styled.div`
    display: ${props=> !props.menuActive ? "none" : "flex"};
    flex-direction: column;
    width: 120px;
    border: 1px solid red;
    position: fixed;
    z-index: 2;
    top: 65px;
    right: 10px;
`
const MenuBoxButton = styled.button`
    height: 35px;
    border: 1px solid #fff;
`

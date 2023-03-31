import styled from "styled-components";

export default function Anfitras() {
    return (
        <>
            <Circulo>
                <LinhaHorizontal></LinhaHorizontal>
                <LinhaHorizontal2></LinhaHorizontal2>
                <CirculoAux1></CirculoAux1>
                <CirculoAux2></CirculoAux2>
                <CirculoAux3></CirculoAux3>
                <CirculoAux4></CirculoAux4>
                <LinhaDiagonal></LinhaDiagonal>
            </Circulo>
        </>
    )
}

export const Circulo = styled.div`
  border: 2px solid lightblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: relative;
`

export const CirculoAux1 = styled.div`
  border: 2px solid lightblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 60px;
  top: 60px;
`
export const CirculoAux2 = styled.div`
  border: 2px solid lightblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 60px;
  top: 60px;
`
export const CirculoAux3 = styled.div`
  border: 2px solid lightblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 60px;
  bottom: 60px;
`
export const CirculoAux4 = styled.div`
  border: 2px solid lightblue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 60px;
  bottom: 60px;
`

export const LinhaHorizontal = styled.div`
  width: 122px;
  height: 2px;
  background-color: aliceblue;
  position: absolute;
  left: -37.5px;
  bottom: 85px;
`
export const LinhaHorizontal2 = styled.div`
  width: 122px;
  height: 2px;
  background-color: aliceblue;
  position: absolute;
  left: -37.5px;
  top: 85px;
`
export const LinhaDiagonal = styled(LinhaHorizontal)`
  width: 175.5px;
  transform: rotate(46.5deg);
  bottom: 22px;
  left: -64px;
`
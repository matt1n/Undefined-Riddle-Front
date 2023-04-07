import styled from "styled-components"
import { FaseContainer, FaseImage } from "../../assets/styles/faseStyle"
import crise from "../../assets/imgs/CriseExistencial.png"
import { Helmet } from "react-helmet"

export default function AuxPage() {
    return (
        <>
            <Helmet>
                <title>Quem quer pizza?</title>
            </Helmet>
            <FaseAuxContainer crise={crise}>
                <FaseAuxImage src={crise}/>
            </FaseAuxContainer>
        </>
    )
}

const FaseAuxContainer = styled(FaseContainer)`
    background-color: black;
`

const FaseAuxImage = styled(FaseImage)`
    margin-top: 10px;
    width: auto;
    height: 550px;
`
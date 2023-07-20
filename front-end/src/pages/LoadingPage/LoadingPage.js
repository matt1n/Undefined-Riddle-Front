import styled from "styled-components"
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Text2 } from "../../assets/styles/faseStyle";
import { TextContainer } from "../HomePage/HomePage";

export default function LoadingPage() {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>
          ???????????
        </title>
      </Helmet>
      <LoadingContainer>
        <TextContainerError>
          <Text>
          <span aria-hidden="true">Carregando...</span>
          Carregando...
          <span aria-hidden="true">Carregando...</span></Text>
        </TextContainerError>
      </LoadingContainer>
      </HelmetProvider>
    </>
  )
}

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
`

const Text = styled(Text2)`
  &:first-child {
    margin-bottom: 50px;
  }
`

const TextContainerError = styled(TextContainer)`
margin-bottom: 0;
`
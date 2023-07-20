import styled from "styled-components"
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Text2 } from "../../assets/styles/faseStyle";
import { TextContainer } from "../HomePage/HomePage";

export default function ErrorPage() {
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>
          ???????????
        </title>
      </Helmet>
      <ErrorContainer>
        <TextContainerError>
          <Text>
            <span aria-hidden="true">404</span>
            404
            <span aria-hidden="true">404</span>
          </Text>
          <Text>
          <span aria-hidden="true">VOCÊ NÃO DEVERIA ESTAR AQUI</span>
          VOCÊ NÃO DEVERIA ESTAR AQUI
          <span aria-hidden="true">VOCÊ NÃO DEVERIA ESTAR AQUI</span></Text>
        </TextContainerError>
      </ErrorContainer>
      </HelmetProvider>
    </>
  )
}

const ErrorContainer = styled.div`
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
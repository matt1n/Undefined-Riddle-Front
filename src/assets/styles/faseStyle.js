import styled from "styled-components";

export const FaseContainer = styled.div `
  background-color: ${props=> props.light && "#fff"};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.div `
  font-size: 35px;
  font-weight: 700;
  color: ${props=> props.light ? "#000" : "#fff"};
  margin-top: 30px;
  margin-bottom: 50px;
` 
export const FaseImage = styled.img `
  height: 200px;
  width: 200px;
  background-color: white;
  margin-bottom: 50px;
`
export const Text = styled.div `
  font-size: 25px;
  color: ${props=> props.light ? "#000" : "#fff"};
  margin-bottom: 30px;
`
export const Answer = styled.button `
  
`
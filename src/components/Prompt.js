import styled from "styled-components"

export default function Prompt(){
  async function answer(event){
    event.preventDefault()
  }
  return (
    <PrompContainer>
      <p>Resposta:</p>
      <form onSubmit={answer}>
        <input></input>
        <button type="submit">Responder</button>
      </form>
    </PrompContainer>
)
}

const PrompContainer = styled.div`
  padding: 50px 80px;
  border: 1px solid #fff;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  p{
    color: #fff;
    margin-bottom: 10px;
  }
  input{
    width: 100%;
    margin-bottom: 10px;
    height: 30px;
  }
  button{
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: transparent;
    color: #fff;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
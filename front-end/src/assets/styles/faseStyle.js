import styled from "styled-components";

export const Background = styled.img `
position: fixed;
z-index: -3;
width: 100%;
height: 100%;
@media(max-width: 1150px) {
  display: none;
}
`

export const FullscreenContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const FaseContainer = styled.div `
  background-color: ${props=> props.light ? "#fff" : "rgb(0, 0, 0)"};
  background: ${props=> props.light 
    ? 
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 4%, rgba(255,255,255,1) 96%, rgba(255,255,255,0) 100%)" 
    : 
     "linear-gradient(90deg, rgba(24, 29, 29,0) 0%, rgba(0, 0, 0,1) 4%, rgba(0, 0, 0,1) 96%, rgba(24, 29, 29,0) 100%)"};
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1150px) {
    width: 100%;
    background-color: ${props=> props.light ? "#fff" : "rgb(0, 0, 0)"};
  }
`;

export const Title = styled.div `
  font-size: 35px;
  font-weight: 700;
  color: ${props=> props.light ? "#000" : "#fff"};
  margin-top: 30px;
  margin-bottom: 50px;
  @media(max-width: 320px) {
    margin-top: 20px;
    margin-bottom: 25px;
  }
` 
export const ImageBox = styled.div`
  width: 480px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  
  @media(max-width: 600px) {
  width: 100%;
  height: 300px;
}
  @media(max-width: 320px){
    margin-bottom: 25px;
  }
`

export const FaseImage = styled.img `
  height: 200px;
  width: 200px;
  background-color: white;
`
export const Text = styled.div `
  font-size: 25px;
  color: ${props=> props.light ? "#000" : "#fff"};
  margin-bottom: 30px;
  
  @media(max-width: 320px) {
    font-size: 20px;
    margin-bottom: 20px;
}
`

export const Start = styled.button` 

width: 250px;
margin-bottom: 15px;
border: 1px solid #fff;
background-color: transparent;

  display: flex;
  color: white;
  text-decoration: none;
  height: 50px;


    display: block;
    position: relative;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
    padding: 17px 30px;
    font-size: .75em;
    letter-spacing: .35em;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid #fff;
    border-radius: 10px;
    transition: all .2s ease;
  
    &:before, 
    &:after {
      content: 'Começar';
      position: absolute;
        top: 0;
        left: 0;
      padding: 8px 0;
      width: 100%;
      -webkit-clip: rect(0px, 0px, 0px, 0px);
      clip: rect(0px, 0px, 0px, 0px);
      background: #ffffff;
      color: #000;
    }
    
    &:before {
      left: -3px;
      top: -2px;
      text-shadow: 2px 0 #fffc00;
      box-shadow: 2px 0 #fc00ff;
    }
  
    &:after {
      left: 2px;
      bottom: -2px;
      text-shadow: -1px 0 #00fffc;
      box-shadow: -1px 0 #fffc00;
    }
  
    &:hover {
      background: #ffffff;
      color: black;
    }
  
    &:hover:before {
        animation: glitch-test 1.5s infinite linear alternate-reverse;
    }
    
    &:hover:after {
        animation: glitch-test 2s infinite linear alternate;
    }
  

@keyframes glitch-test {
  0% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  5.88235% {
    clip: rect(0px, 600px, 0px, 0px);
  }
  11.76471% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  17.64706% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  23.52941% {
    clip: rect(100px, 600px, 100px, 0px);
  }
  29.41176% {
    clip: rect(0px, 600px, 600px, 0px);
  }
  35.29412% {
    clip: rect(100px, 600px, 0px, 0px);
  }
  41.17647% {
    clip: rect(0px, 600px, 600px, 0px);
  }
  47.05882% {
    clip: rect(100px, 600px, 0px, 0px);
  }
  52.94118% {
    clip: rect(-3px, 600px, 0px, 0px);
  }
  58.82353% {
    clip: rect(100px, 450px,100px, 0px);
  }
  64.70588% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  70.58824% {
    clip: rect(100px, 450px, 100px, 0px);
  }
  76.47059% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  82.35294% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  88.23529% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  94.11765% {
    clip: rect(0px, 450px, 0px, 0px);
  }
  100% {
    clip: rect(0px, 450px, 0px, 0px);
  }
}

`


export const Answer = styled(Start)`
margin-top: 10px;

  color: ${props=> props.light ? "#000" :"#ffffff"};


    border: ${props=> props.light ? "1px solid #000" : "1px solid #fff"};
    &:after, &:before{
      content: 'Responder';
      background: ${props=> props.light ? "#000" :"#ffffff"};
      color: ${props=> props.light ? "#ffffff" :"#000"};
    }
    &:hover {
      background:  ${props=> props.light ? "#000" :"#ffffff"};
      color: ${props=> props.light ? "#ffffff" :"#000"};
    }


  @media(max-width: 320px) {
      height: 40px;
      padding: 13px 30px;
}

`

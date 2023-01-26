import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media (max-width:1300px) {
        font-size: 87.5%;
    }
    
    @media (max-width:700px) {
        font-size: 65.5%;
    }
    
}

body {
    background-color: rgb(0, 9, 19);
    color: ${props => props.theme.colors["gray-100"]};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    
}

body,input ,textarea,button {
    font-family: "BeaufortforLOL-Bold";
    font-size: 1rem;
    
    
}
input{
    :focus{
    outline:  0;
    
}
}

::-webkit-scrollbar {
    width: .4rem;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: #006680;
  }

`
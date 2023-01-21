import styled from "styled-components";

export const HeaderContainer = styled.header`
       position: relative;
    z-index: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    
    height: 45vh;
    min-height: 31.25rem;
    margin: 0px auto;

    video{
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100%;

    object-fit: cover;
    object-position: 100% 50%;
}
      
`

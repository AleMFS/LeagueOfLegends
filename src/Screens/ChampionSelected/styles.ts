import styled from "styled-components";

export const ChampionSelectedContainer = styled.section`
    display: flex;
    flex-direction: column;
    
   
        

    
`

export const BGContainer = styled.div`
    
position: relative;
`

export const BG = styled.div`    
    background-position: 75% 10%;
    background-size: cover;
    background-repeat: no-repeat;    
    height: 100vh;
    filter: blur(8px);
    animation: 3000ms cubic-bezier(0.215, 0.61, 0.355, 1) 500ms 1 normal both running ;
    
`
export const ImageChamp = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 110%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    
    p{
        
        
    }
    
   
    animation: 2000ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms 1 normal both running lbWRkT;
    background: rgba(0,0,0, .7);
   
    img{
        margin-top: 1%;
        width: 100%;
        height: 80%;
        max-width: 1215px;
        object-fit: cover;
        
    }
`
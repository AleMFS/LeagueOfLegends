import styled from "styled-components";

export const ChampionSelectedContainer = styled.section`
        display: flex;
        flex-direction: column;
    
    `

export const BGContainer = styled.div`  
        width: 100%;
        height :100vh ;
        position: relative;
    `

export const BgBlur = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-position: 70%;
    opacity: 0.2;
    
    filter: blur(8px);
    
    
`



export const ImageChamp = styled.div`
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
      
      

       img{     
        position : absolute;
        max-width: 100%;
        height: 80vh;        
       top: 50px;
       left: 50%;
       transform: translate(-50%);
       background-position: center;
       -webkit-mask-image: linear-gradient(rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0) 98%);
       
       
       
        
       }

       @media (max-width:1000px){
        img{
            max-width :70rem ;
            height: 70%;
        }
       }
       @media (max-width:700px){
        img{
            max-width: 80%;
            height: 60%;
        }
       }

        
     
    `

export const InfoChamp = styled.section`   
       position: absolute;
       display: flex;
       flex-direction: column;
       align-items: center;
       bottom: 7vh;
       left: 50%;
       transform: translate(-50%);
       width: 100%;
       max-width: 100%;
       padding: 1rem;
       
       
       
        

        strong{
            font-size: 6.25rem;        
            text-transform: uppercase;
            color: #FFF;
        }
        span{
            font-size: 1.5rem;        
            text-transform: uppercase;
        }

        @media (max-width:1000px){
            top: 70vh;
       }
       @media (max-width:700px){
            top: 60vh;
       }
    `

export const Lore = styled.div`    
        width: 100%;
        margin:  6rem auto;
        max-width: 700px;
    `
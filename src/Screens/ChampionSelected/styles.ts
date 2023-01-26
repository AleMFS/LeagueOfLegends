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
       object-fit: cover;
       object-position: 70%;
       
       
       
        
       }

       @media (max-width:1000px){
        img{
            max-width :80%;
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
            text-align: center;
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

export const Lore = styled.section`    
        width: 100%;
        max-width: 62.5rem;
        margin:  0 auto 1rem;        
        border: 1px solid #a9934e;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        border-top: none;
        border-radius: 10px;
        margin-top: 2rem;
       


        .loreInfo{
            width: 100%;
            max-width: 37.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            gap: 2rem;
            
            

            h4{
                font-size: 3rem;
                color: #a9934e;
            }
            p{
                font-size: 1.25rem;
            }
            button{
                color: #a9934e;
                border: none;
                background: transparent;
                cursor: pointer;

                :hover{
                   opacity: 0.7;
                }
            }
           
        }
    `
export const Skins = styled.div`
        width: 100%;
        max-width: 81.25rem;
        margin: 0 auto;
        border: 1px solid white;        
        overflow-y: hidden;
        padding:  0.5rem;

        display: grid;
        grid-template-columns: 12.5rem auto;
        gap: 0.5rem;
        
        img{
           width: 12.5rem ;
        }
 
        @media(max-width:1160px){
            display: flex;
            flex-direction: column-reverse;
        }
    `

export const Carrosel = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: 39.625rem;
        overflow: hidden;

        @media(max-width:1160px){
            display: flex;
            flex-direction: row;
            overflow-x: hidden;
           
        }
        
    `
export const SkinSelected = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
       
      img{
        width: 100%;      
        max-height : 100% ;
       object-fit :contain ;
      }

     
        
    `
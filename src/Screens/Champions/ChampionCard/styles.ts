import styled from "styled-components";

export const ChampionCardContainer = styled.div`
    width:100% ;
    
    min-width: 11rem;
    display:flex ;
    flex-direction: column; 
    transition: 0.5s ease-in-out ;
    cursor: pointer;
    
    a{
        color: white;
        text-decoration: none;
    }
    

   img{
        width: 100%;
        height: 18.75rem;
        object-position: top ;
        object-fit: cover;
        animation: fadeInBotton 1.5s ease 0.5s forwards;
        width: 1;
        overflow: hidden;
   }
   div{
        padding: 1rem;    
        background-color: rgb(6, 28, 37);    
        transition: 0.5s ease-in-out ;
        

    p{
        font-style: italic;
        font-size:1rem ;
        transition: 0.5s ease-in-out ;
        animation: fadeInLeft 0.5s ease 0.5s forwards;
        width: 1;
        overflow: hidden;
        letter-spacing: 0.08em;
        
        
        
   }
    // IMG
    /*@keyframes fadeInBotton {
        0% {
            height: 0;
            opacity: 0;
        }
        100% {
            height: 18.75rem;
            opacity: 1;
        }
    }*/

    // Name
    @keyframes fadeInLeft {
        0% {
            width: 0;
            opacity: 0;
        }
        100% {
            width: 100%;
            opacity: 1;
        }
    }
   }   

   &:hover{
   transform: scale3d(1.05, 1.05, 1);
    

    div{
        background-color: #006680;
    }
    p{
        
        transform: translateX(1rem);
    } 
  
    
   }

 
    
`
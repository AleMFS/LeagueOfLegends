import styled from "styled-components";

export const ChampionsContainer = styled.main`
    width: 100%;    
    margin: 0 auto;
     
    
    .dnNsJq {
    display: inline-block;
    vertical-align: middle;
    width: 36px;
    height: 36px;
    padding: 7px;
    fill: rgb(208, 168, 92);    
}


`
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
    
    z-index: 1;
    width: 100vw;
    height: 100%;

    object-fit: cover;
    object-position: 100% 50%;
}
.mobile{
    display: none;
    z-index: 1;
    width: 100vw;
    height: 100%;

    object-fit: cover;
    object-position: 90% 50%;
}

.logo{
    width: 25rem;
    position: absolute;
    top: 0;
    left: 5%;
    z-index: 2;
    filter: drop-shadow(8px 8px 15px #000);
    
}

@media (max-width:800px){

    video{
        display: none;
    }
    .mobile{
        display: flex;
    }
}


      
`

export const Search = styled.input`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    width: 50%;
    min-width: 50%;
    margin:2rem auto;
    display: flex;
    background-color: #006680;
    border: none;
    padding: 1rem 2rem;
    border-radius: 10px;
    color: #FFF;

    &::placeholder{
        color: #FFF;
    }
    :focus{
      outline:  0;
      box-shadow: 3px 3px 10px #005A82, 0px 0px 10px #0AC8B9;
    :focus::-webkit-input-placeholder {
   color: transparent;
}

};
    

`

export const ChampionsContent = styled.div`
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(100px, 250px)) ;       
    gap: 1rem;
    justify-content: center;

   @media (max-width:1000px){
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    
   }
   
`


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
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100%;

    object-fit: cover;
    object-position: 100% 50%;
}
      
`

export const Search = styled.input`
    width: 50%;
    min-width: 50%;
    margin:2rem auto;
    display: flex;
    background-color: #006680;
    border: none;
    padding: 1rem;
    border-radius: 10px;
    color: #FFF;

    &::placeholder{
        color: #FFF;
    }


`

export const ChampionsContent = styled.div`
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(168px, 1fr)) ;       
    gap: 1rem;
   
`


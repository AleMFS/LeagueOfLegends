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

footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
        gap: 1rem;

    img{
        width: 150px;
        filter: invert(1);
    }       
    
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
    grid-template-columns:repeat(9,1fr) ;       
    gap: 1rem;
    @media (max-width:1700px) {
        grid-template-columns: repeat(8,1fr);
    }
    @media (max-width:1540px) {
        grid-template-columns: repeat(7,1fr);
    }
    @media (max-width:1340px) {
        grid-template-columns: repeat(6,1fr);
    }
    @media (max-width:1200px) {
        grid-template-columns: repeat(5,1fr);
    }

    @media (max-width:1000px) {
        grid-template-columns: repeat(4,1fr);
    }

    @media (max-width:780px) {
        grid-template-columns: repeat(3,1fr);
    }
    @media (max-width:590px) {
        grid-template-columns: repeat(2,1fr);
    }
`


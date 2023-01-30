import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem auto 1rem;
    gap: 1rem;

    img{
        width: 150px;
        filter: invert(1);
    }

    p{
        text-align: center;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    span{
        font-size: 1.5rem;
    }
`


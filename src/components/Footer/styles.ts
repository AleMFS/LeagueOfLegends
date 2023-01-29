import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0 2rem;
    gap: 1rem;

    img{
        width: 150px;
        filter: invert(1);
    }

    a{
        color: #fff;
        text-decoration: none;
    }
    span{
        font-size: 1.5rem;
    }
`


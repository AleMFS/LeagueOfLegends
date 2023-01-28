import styled from "styled-components";

export const SearchTagsContainer = styled.div`
    width   :100% ;
`
export const TagsContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
    

    label{
            background: #006680;
            color: #FFF;
            font-weight: bold;
            border-radius: 6px;
            padding: 0.75rem;
            font-size: 0.75rem;

            input[type="radio"] {
            display: none;
            }

            :hover{
                background-color: rgb(6, 28, 37); 
                
            }

            &.active{
                background-color: rgb(6, 28, 37);
            }
        }

   
    @media only screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 600px) {
        gap: 0.5rem;

label{
    padding: 0.5rem;
    font-size: 0.65rem;
}
  }

`
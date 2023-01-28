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

    @media (max-width:490px){
        gap: 0.5rem;
        

        label{
            padding: 0.5rem;
            font-size: 0.65rem;
        }
    }
    
  // iphone responsivity

    @media only screen 
    and (device-width: 390px) 
    and (device-height: 844px) 
    and (-webkit-device-pixel-ratio: 3) {

        gap: 0.1rem;

        label{
            padding: 0.3rem;
            font-size: 6px;
        }
     }

    @media only screen 
    and (device-width: 428px) 
    and (device-height: 926px) 
    and (-webkit-device-pixel-ratio: 3) {

        gap: 0.1rem;

        label{

            padding: 0.3rem;
            font-size: 6px;
        }
     }

    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {

        gap: 0.1rem;

        label{

            padding: 0.3rem;
            font-size: 6px;
        }
     }

    @media only screen 
    and (device-width: 375px) 
    and (device-height: 812px) 
    and (-webkit-device-pixel-ratio: 3) {

        gap: 0.1rem;

        label{

            padding: 0.3rem;
            font-size: 6px;
        }
     }

    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 3) {

        gap: 0.1rem;

        label{

            padding: 0.3rem;
            font-size: 6px;
        }
     }

     @media only screen
    and (width: 390px) 
    and (device-height: 844px)
    and (-webkit-device-pixel-ratio: 3) { 

    gap: 0.1rem;

label{

    padding: 0.3rem;
    font-size: 6px;
}
    }

    @media only screen
    and (width: 393px) 
    and (device-height: 852px)
    and (-webkit-device-pixel-ratio: 3) { 
        gap: 0.1rem;

        label{

            padding: 0.3rem;
            font-size: 6px;
        }
    }

    @media only screen
    and (device-width: 430px) 
    and (device-height: 932px) 
    and (-webkit-device-pixel-ratio: 3) {
        gap: 0.1rem;

        label{

            padding: 0.3rem;
            font-size: 6px;
        }
    }

`
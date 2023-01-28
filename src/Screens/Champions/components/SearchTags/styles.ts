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
  @media only screen and (max-device-width: 320px)  and (-webkit-device-pixel-ratio: 1) ,
        
        /* iphone 4 */
         only screen and (max-device-width: 320px)  and (-webkit-device-pixel-ratio: 2), 
        
        /* iphone 5 */
         only screen and (max-device-width: 320px)   and (-webkit-device-pixel-ratio: 2), 
        
        /* iphone 6, 6s, 7, 8 */
         only screen and (max-device-width: 375px)  and (-webkit-device-pixel-ratio: 2), 
            
        /* iphone 6+, 6s+, 7+, 8+ */
         only screen and (max-device-width: 414px)   and (-webkit-device-pixel-ratio: 3), 
        
        /* iphone X , XS, 11 Pro, 12 Mini */
         only screen and (max-device-width: 375px)   and (-webkit-device-pixel-ratio: 3), 

        /* iphone 12, 12 Pro */
         only screen and (max-device-width: 390px)   and (-webkit-device-pixel-ratio: 3), 
       
        /* iphone XR, 11 */
         only screen and (max-device-width: 414px)   and (-webkit-device-pixel-ratio: 2), 
            
        /* iphone XS Max, 11 Pro Max */
         only screen and (max-device-width: 414px)  and (-webkit-device-pixel-ratio: 3), 

        /* iphone 12 Pro Max */
         only screen and (max-device-width: 428px)  and (-webkit-device-pixel-ratio: 3),

         /*iPhone 13 maxi*/
         only screen and (max-device-width: 375px)and  (-webkit-device-pixel-ratio: 3) ,

         /*iPhone 13 Pro Max*/
          only screen and (max-device-width: 390px)and  (-webkit-device-pixel-ratio: 3),

          /*iPhone 13 */
           only screen and (max-device-width: 428px)and  (-webkit-device-pixel-ratio: 3),

        /*iPhone 14 Pro*/
         only screen and (max-device-width: 390px) and  (-webkit-device-pixel-ratio: 3) ,

        /*iPhone 14 Pro*/
         only screen and (max-device-width: 393px)and  (-webkit-device-pixel-ratio: 3) ,

        /*iPhone 14 Pro Max*/
          screen and (max-device-width: 430px)and  (-webkit-device-pixel-ratio: 3){
            gap: 0.2rem;

            label{
            padding: 0.4rem;
            font-size: 6px;
            }
        }
       

         



    
`
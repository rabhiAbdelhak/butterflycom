import {css} from 'styled-components';



export const xtraLargeScreen = (props) => {
    return css`
       @media   (min-width: 992px){
         ${props}
       }
    `;
}

export const largeScreen = (props) => {
    return css`
       @media   (max-width: 992px){
         ${props}
       }
    `;
}

export const middleScreen = (props) => {
   return css`
      @media   (max-width: 720px){
        ${props}
      }
   `;
}

export const mobileScreen = (props) => {
   return css`
      @media   (max-width: 450px){
        ${props}
      }
   `;
}
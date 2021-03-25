import React from 'react';

//importing styled-components for styling
import styled from 'styled-components';

//import logo image
import LogoImg from './src/LogoImg.png';

function Logo() {

    /*
         ---> Styled-components items
    */
   const LogoImage = styled.img`
   margin-top: -45px;
   opacity: 0.8;
   border-radius: 100%;
   transition: 0.25s;
   :hover {
       cursor: pointer;
       opacity: 0.9;
       transition: 0.25s;
   }
   `

    return (
        <LogoImage src={LogoImg} height="190px" width="190px"></LogoImage>
    );
}

export default Logo;
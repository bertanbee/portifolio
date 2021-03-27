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
   @media only screen and (max-width: 1000px) {
    padding-top: 12px;
    opacity: 0.8;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    transition: 0.25s;
    :hover {
        cursor: pointer;
        opacity: 0.9;
        transition: 0.25s;
    }
   }
   @media only screen and (min-width: 1000px) {
    margin-top: -45px;
    opacity: 0.8;
    border-radius: 100%;
    transition: 0.25s;
    :hover {
        cursor: pointer;
        opacity: 0.9;
        transition: 0.25s;
    }
   }
   
   `

    return (
        <LogoImage src={LogoImg} height="190px" width="190px"></LogoImage>
    );
}

export default Logo;

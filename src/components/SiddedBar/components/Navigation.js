import React from 'react';

//importing styled-components for styling
import styled from 'styled-components';

//importing icons
import { BiUser, BiChalkboard, BiEnvelope } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';

function Navigation() {

    /*
         ---> Styled-components items
    */
    const NavigationExternalBox = styled.div`
    margin-top: -45px;
    width: 88%;
    `
    const NavigationBox = styled.div`
     display: flex;
     justify-content: left;
     align-items: center;
     flex-direction: row;
     color: #4E4E4E;
     :hover {
         cursor: pointer;
         .text {
             color: #282828;
             transition: 0.25s;
         }
         .icon {
             fill: #282828;
             padding-left: 36px;
             transition: 0.25s;
         }
     }
     .icon {
         fill: #4E4E4E;
         padding: 24px;
         padding-right: 12px;
         transition: 0.25s;
     }
    `
    const NavigationText = styled.p`
   font-style: 'Ubuntu', sans-serif;
   font-size: 16px;
   color: #282828;
   letter-spacing: 6px;
   `

    return (
        <NavigationExternalBox>
            <NavigationBox>
                <BiUser fill="#282828" fontSize="24px" className="icon"></BiUser>
                <NavigationText>INTRO</NavigationText>
            </NavigationBox>
            <NavigationBox>
                <BiPencil fill="#282828" fontSize="24px" className="icon"></BiPencil>
                <NavigationText>PROJECTS</NavigationText>
            </NavigationBox>
            <NavigationBox>
                <BiChalkboard fill="#282828" fontSize="24px" className="icon"></BiChalkboard>
                <NavigationText>RESUME</NavigationText>
            </NavigationBox>
            <NavigationBox>
                <BiEnvelope fill="#282828" fontSize="24px" className="icon"></BiEnvelope>
                <NavigationText>CONTACT</NavigationText>
            </NavigationBox>
        </NavigationExternalBox>
    );
}

export default Navigation;
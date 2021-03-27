import React, { useState } from 'react';

//importing styled-components for styling
import styled from 'styled-components';

//importing icons
import { BiUser, BiChalkboard, BiEnvelope, BiHeart } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';

function Navigation() {

    /*
         ---> Styled-components items
    */
    const NavigationExternalBox = styled.div`
    @media only screen and (max-width: 1000px) {
        margin-top: -160px;
        width: 88%;
    }
    @media only screen and (min-width: 1000px) {
        margin-top: -45px;
        width: 88%;
    }
    
    .selected {
        @media only screen and (max-width: 1000px) {
            @keyframes animationnav1 {
                0% {
                 padding-left: 12px;
                 margin-right: 0px;
                 border-top-right-radius: 100%; 
                 border-bottom-right-radius: 100%;
                 transition: 0.25s;
                }
                100% {
                 padding-left: 0px;
                 margin-right: -5px;
                 background-color: #DBD6D6;
                 border-top-left-radius: 45px; 
                 border-bottom-left-radius: 45px; 
                 transition: 0.25s;
                }
             }
             animation-name: animationnav1;
             animation-duration: 0.25s;
             animation-fill-mode: forwards;
        }
        @media only screen and (min-width: 1000px) {
            @keyframes animationnav2 {
                0% {
                 padding-left: 12px;
                 margin-right: 0px;
                 border-top-right-radius: 100%; 
                 border-bottom-right-radius: 100%;
                 transition: 0.25s;
                }
                100% {
                 padding-left: 45px;
                 margin-right: -16px;
                 background-color: #DBD6D6;
                 border-top-left-radius: 45px; 
                 border-bottom-left-radius: 45px; 
                 transition: 0.25s;
                }
             }
             animation-name: animationnav2;
             animation-duration: 0.25s;
             animation-fill-mode: forwards;
         
        }
    }
    `
    const NavigationBox = styled.div`
     @media only screen and (max-width: 1000px) {
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
                padding-left: 18px;
                fill: #282828;
                transition: 0.25s;
            }
        }
       }
        .icon {
            fill: #4E4E4E;
            padding: 24px;
            transition: 0.25s;
        }
     }
     @media only screen and (min-width: 1000px) {
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
    }
     .icon {
         fill: #4E4E4E;
         padding: 24px;
         padding-right: 12px;
         transition: 0.25s;
     }
    }
     
    `
    const NavigationText = styled.p`
    @media only screen and (max-width: 1000px) {
        display: none;
    }
    @media only screen and (min-width: 1000px) {
   font-style: 'Ubuntu', sans-serif;
   font-size: 16px;
   color: #282828;
   letter-spacing: 6px;
    }
   `
   const SeparationBox = styled.div`
   @media only screen and (max-width: 1000px) {
    padding-top: 21px;
   }
   @media only screen and (min-width: 1000px) {
    padding-top: 30px;
   }
   
   `



   /*
         ---> Selected state
    */
   const [ selected, setSelected ] = useState({
       intro: true,
       projects: false,
       resume: false,
       contact: false,
       favorites: false
   });
    return (
        <NavigationExternalBox>
            <NavigationBox onClick={() => { selected.intro === false ? setSelected({intro: true, projects: false, resume: false, contact: false, favorites: false}) : setSelected(selected) }} className={selected.intro === true ? "selected" : ""}>
                <BiUser fill="#282828" fontSize="24px" className="icon"></BiUser>
                <NavigationText>INTRO</NavigationText>
            </NavigationBox>
            <NavigationBox onClick={() => { setSelected({intro: false, projects: true, resume: false, contact: false, favorites: false}) }} className={selected.projects === true ? "selected" : ""}>
                <BiPencil fill="#282828" fontSize="24px" className="icon"></BiPencil>
                <NavigationText>PROJECTS</NavigationText>
            </NavigationBox>
            <NavigationBox onClick={() => { setSelected({intro: false, projects: false, resume: true, contact: false, favorites: false}) }} className={selected.resume === true ? "selected" : ""}>
                <BiChalkboard fill="#282828" fontSize="24px" className="icon"></BiChalkboard>
                <NavigationText>RESUME</NavigationText>
            </NavigationBox>
            <NavigationBox onClick={() => { setSelected({intro: false, projects: false, resume: false, contact: true, favorites: false}) }} className={selected.contact === true ? "selected" : ""}>
                <BiEnvelope fill="#282828" fontSize="24px" className="icon"></BiEnvelope>
                <NavigationText>CONTACT</NavigationText>
            </NavigationBox>
            <SeparationBox>
                <NavigationBox onClick={() => { setSelected({intro: false, projects: false, resume: false, contact: false, favorites: true}) }} className={selected.favorites === true ? "selected" : ""}>
                  <BiHeart fill="#282828" fontSize="24px" className="icon"></BiHeart>
                  <NavigationText>FAVORITES</NavigationText>
                </NavigationBox>
            </SeparationBox>    
        </NavigationExternalBox>
    );
}

export default Navigation;

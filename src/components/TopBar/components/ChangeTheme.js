import React, { useState, useEffect } from 'react';

//importing styled-components
import styled from 'styled-components';

//importing icons
import { BiSun, BiMoon } from 'react-icons/bi';

function ChangeTheme() {

    /*
        ---> ChangeTheme state
    */
    const [ darktheme, setdarktheme ] = useState("")
    useEffect(() => {
        setdarktheme("0");
    }, [])
   /*
        ---> Change theme function
    */
   function ChangeThemeFunction() {
       if(darktheme === "1") {
           setdarktheme("0");
       } else {
           setdarktheme("1");
       }
   } 

    


    /*
        ---> Styled-components items
    */
   const ChangeThemeContainer = styled.div`
   padding-right: 6%;
   `
   const ChangeThemeButton = styled.div`
   height: 32px;
   width: 64px;
   border: 1px solid #bdbdbd;
   border-radius: 16px;
   background-color: #999999;
   `
   const ChangeThemePim = styled.div`
   ${darktheme === "0" ? 
   `
   @keyframes animation {
       0% {
        margin-left: 32px;
        transition: 0.25s;
       }
       100% {
        margin-left: 0px;
        transition: 0.25s;
       }
    }
    animation-name: animation;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    .sun {
        display: flex;
    }
    .moon {
        display: none;
    }
   ` : `
   @keyframes animation {
       0% {
        margin-left: 0px;
        transition: 0.25s;
       }
       100% {
        margin-left: 32px;
        transition: 0.25s;
       }
    }
    animation-name: animation;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    .sun {
        display: none;
    }
    .moon {
        display: flex;
    }
   `}
    display: flex;
    flex-direction: row;
    height: 32px;
    width: 32px;
    border-radius: 100%;
    background-color: #CBCBCB;
    align-items: center;
    justify-content: center;
  
   :hover {
       background-color: #6C6C6C;
       transition: 0.25s;
       .sun {
           fill: #F8F8F8;
           transition: 0.25s;
       }
       .moon {
        fill: #F8F8F8;
        transition: 0.25s;
    }
   }
   `

    return (
        <ChangeThemeContainer>
            <ChangeThemeButton>
                <ChangeThemePim onClick={ChangeThemeFunction}>
                    <BiSun fontSize="21px" className="sun"></BiSun>
                    <BiMoon fontSize="21px" className="moon"></BiMoon>
                </ChangeThemePim>
            </ChangeThemeButton>
        </ChangeThemeContainer>
    );
}

export default ChangeTheme;
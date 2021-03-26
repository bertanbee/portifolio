import React from 'react';

//importing styled-components for styling
import styled from 'styled-components';

//importing icon
import { BiHeart } from 'react-icons/bi';

function Favorites() {

    /*
         ---> Styled-components items
    */
   const FavoritesBox = styled.div`
   display: flex;
   justify-content: left;
   width: 88%;
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
   letter-spacing: 6px;
   transition: 0.25s;
   `
   
    return (
        <FavoritesBox>
            <BiHeart fill="#282828" fontSize="24px" className="icon"></BiHeart>
            <NavigationText className="text">FAVORITES</NavigationText>
        </FavoritesBox>
    );
}

export default Favorites;
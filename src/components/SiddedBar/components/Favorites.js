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
   :hover {
       cursor: pointer;
   }
   .icon {
       padding: 24px;
       padding-right: 12px;
   }
   `
   const NavigationText = styled.p`
   font-style: 'Ubuntu', sans-serif;
   font-size: 18px;
   color: #282828;
   letter-spacing: 6px;
   `
   
    return (
        <FavoritesBox>
            <BiHeart fill="#282828" fontSize="24px" className="icon"></BiHeart>
            <NavigationText>FAVORITES</NavigationText>
        </FavoritesBox>
    );
}

export default Favorites;
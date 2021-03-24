import React from 'react';

//importing styled-components
import styled from 'styled-components';

//importing icons
import { BiSearchAlt2 } from 'react-icons/bi';

function SearchBar() {

    /*
        ---> Styled-components items
    */
   const SearchBarContainer = styled.form`
   display: flex;
   width: 50%;
   flex-direction: row;
   padding-left: 3%;
   align-items: center;
   :hover {
       .searchButton {
           fill: #282828;
           transition: 0.25s;
        }
   }
   .searchButton {
       fill: #808080;
       trasnition: 0.25s;
   }
   .searchButton:hover {
       fill: #282828;
       cursor: pointer;
       transition: 0.25s;
   }
   `
   const SearchInput = styled.input`
   height: 16px;
   width: 60%;
   border: 1px solid #bdbdbd;
   border-radius: 30px;
   padding: 8px;
   padding-right: 42px;
   outline: 0;
   background-color: #FCFCFC;
   transition: 0.25s;
   :hover {
       border: 1px solid #282828;
       transition: 0.25s;
   }
   `
   const SearchSubmit = styled.button`
   height: 18px;
   width: 18px;
   border: 0;
   border-radius: 100%;
   margin-left: -32px;
   background-color: #FCFCFC;
   `

    return (
        <SearchBarContainer>
            <SearchInput type="text" name="search"></SearchInput>
            <SearchSubmit type="submit" value="Submit">
                <BiSearchAlt2 className="searchButton" fontSize="18px"></BiSearchAlt2>
            </SearchSubmit>
            
        </SearchBarContainer>
    );
}

export default SearchBar;
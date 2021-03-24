import React from 'react';

//importing styled-components
import styled from 'styled-components';

//importing icons
import { BiWorld, BiChevronDown } from 'react-icons/bi';

function Internalization() {

    /*
        ---> Styled-components items
    */
   const InternalizationContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   :hover {
       cursor: pointer;
   }
   `

    return (
        <InternalizationContainer>
            <BiWorld fontSize="32px" fill="#282828"></BiWorld>
            <BiChevronDown fontSize="18px" fill="#282828"></BiChevronDown>
        </InternalizationContainer>
    );
}

export default Internalization;
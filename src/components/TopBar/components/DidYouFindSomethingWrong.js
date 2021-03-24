import React from 'react';

//importing styled-components
import styled from 'styled-components';

function DidYouFindSomethingWrong() {

    /*
        ---> Styled-components items
    */
   const DidYouFindSomethingWrongContainer = styled.button`
   height: 34px;
   border: 1px solid #bdbdbd;
   border-radius: 30px;
   outline: 0;
   transition: 0.25s;
   background-color: #fff;
   color: #282828;
   padding-right: 32px;
   padding-left: 32px;
   font-size: 14px;
   background-color: #FCFCFC;
   :hover {
       border: 1px solid #282828;
       background-color: #282828;
       color: #fff;
       cursor: pointer;
       transition: 0.25s;
   }
   `

    return (
        <DidYouFindSomethingWrongContainer>
            DID YOU FIND SOMETHING WRONG?
        </DidYouFindSomethingWrongContainer>
    );
}

export default DidYouFindSomethingWrong;
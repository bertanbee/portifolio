import React from 'react';

//importing components
import SearchBar from './components/SearchBar';
import DidYouFindSomethingWrong from './components/DidYouFindSomethingWrong';
import Internalization from './components/Internalization';
import ChangeTheme from './components/ChangeTheme';

//importing styled-components for styling
import styled from 'styled-components';

function TopBar() {

    /*
         ---> Styled-components items
    */

         const Container = styled.div`
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         height: 96px;
         width: 100%;
         border-bottom: 1px solid #bdbdbd;
         background-color: #fff;
         `
         const RightButtons = styled.div`
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         width: 50%;
         `
    return (
        <Container>
            <SearchBar></SearchBar>
            <RightButtons>
                <DidYouFindSomethingWrong></DidYouFindSomethingWrong>
                <Internalization></Internalization>
                <ChangeTheme></ChangeTheme>
            </RightButtons>
        </Container>
    );
}

export default TopBar;
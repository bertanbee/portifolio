import React from 'react';

//importing styled-components for styling
import styled from 'styled-components';

//importing elements
import Logo from './components/Logo';
import Navigation from './components/Navigation';

function SiddedBar() {

    /*
         ---> Styled-components items
    */

    const Container = styled.div`
    @media only screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 98.3vh;
        width: 60px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 344px;
    border-right: 1px solid #bdbdbd;
    background-color: #fff;
    padding-bottom: 48px;
    padding-top: 48px;
    box-sizing: border-box;
    `
    return (
        <Container>
            <Logo></Logo>
            <Navigation></Navigation>
        </Container>
    );
}

export default SiddedBar;

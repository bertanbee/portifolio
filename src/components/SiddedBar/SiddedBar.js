import React from 'react';

//importing styled-components for styling
import styled from 'styled-components';

function SiddedBar() {

    /*
         ---> Styled-components items
    */

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 344px;
    border-right: 1px solid #bdbdbd;
    background-color: #fff;
    `
    return (
        <Container></Container>
    );
}

export default SiddedBar;
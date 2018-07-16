import React from 'react';
import styled, {keyframes} from 'styled-components';

const mixinFlex = (justify='center', align='center') => {
    return `
        display: flex;
        justify-content: ${justify};
        align-items: ${align};
    `;
}

const appear = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    ${mixinFlex(arguments.justify = 'flex-end')};
    background: ${props => props.primary ? 'palevioletred' : 'papayawhip'};
    height: 150px;
    width: 100%;
`
    

const Title = styled.h1`
    animation: ${appear} 1s linear forwards;
    color: ${props => !props.primary ? 'palevioletred' : 'papayawhip'};
    &:hover {
        color: white;
    }
`;

const App = ({primary}) => {
    
    return (
        <Wrapper primary={primary}>
            <Title primary={primary}>
                Hello world
            </Title>
        </Wrapper>
    );
};

export default App;
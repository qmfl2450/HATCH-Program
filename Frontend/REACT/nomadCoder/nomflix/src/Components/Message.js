import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Text = styled.span`
    color: ${props => props.color};
`;

const Message = ({text, color}) => (
    <Container>
        <Text color={color}>{text}</Text>
    </Container>
);

Message.propTypes = {
    text: propTypes.string.isRequired,
    color: propTypes.string.isRequired
};

export default Message;
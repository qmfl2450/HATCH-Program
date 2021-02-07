import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../Components/Section';

const Container = styled.div`
    padding: 0px 10px;
`;

const TVPresenter = ({nowPlaying, popular, upcoming, loading, error}) => loading ? null : 
    <Container>
        {nowPlaying && nowPlaying.length > 0 && <Section title = 'Now Plaing' />}
    </Container>
;

TVPresenter.propTypes = {
    nowPlaying: propTypes.array,
    popular: propTypes.array,
    upcoming: propTypes.array,
    loading: propTypes.isRequired,
    error: propTypes.string
};

export default TVPresenter;
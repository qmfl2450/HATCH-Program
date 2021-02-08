import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../Components/Section';
import Loader from 'Components/Loader';

const Container = styled.div`
    padding: 0px 10px;
`;

const TVPresenter = ({nowPlaying, popular, upcoming, loading, error}) => loading ? <Loader /> : 
    <Container>
        {nowPlaying && nowPlaying.length > 0 && 
        <Section title = 'Now Playing'>
            {nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
        }
        {upcoming && upcoming.length > 0 && 
        <Section title = 'Up Coming'>
            {upcoming.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
        }
        {popular && popular.length > 0 && 
        <Section title = 'Popular'>
            {popular.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
        }
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
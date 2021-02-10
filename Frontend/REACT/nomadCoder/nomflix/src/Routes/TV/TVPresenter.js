import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Section from '../../Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
    padding: 0px 20px;
`;

const TVPresenter = ({toprated, popular, airingToday, loading, error}) => loading ? <Loader /> : 
    <Container>
        {toprated && toprated.length > 0 && 
        <Section title = 'Top Rated Shows'>
            {toprated.map(show => <span key={show.id}>{show.name}</span>)}
        </Section>
        }
        {popular && popular.length > 0 && 
        <Section title = 'Popular Shows'>
            {popular.map(show => <span key={show.id}>{show.name}</span>)}
        </Section>
        }
        {airingToday && airingToday.length > 0 && 
        <Section title = 'Airing Today Shows'>
            {airingToday.map(show => <span key={show.id}>{show.name}</span>)}
        </Section>
        }
        {error && <Message color='#e74c3c' text={error} />}
    </Container>;

TVPresenter.propTypes = {
    toprated: propTypes.array,
    popular: propTypes.array,
    airingToday: propTypes.array,
    loading: propTypes.isRequired,
    error: propTypes.string
};

export default TVPresenter;
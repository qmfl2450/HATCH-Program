import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const TVPresenter = ({nowPlaying, popular, upcoming, loading, error}) => null;

TVPresenter.propTypes = {
    nowPlaying: propTypes.array,
    popular: propTypes.array,
    upcoming: propTypes.array,
    loading: propTypes.isRequired,
    error: propTypes.string
};

export default TVPresenter;
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const TVPresenter = ({topRated, popular, airingToday, loading, error}) => null;

TVPresenter.propTypes = {
    topRated: propTypes.array,
    popular: propTypes.array,
    airingToday: propTypes.array,
    loading: propTypes.isRequired,
    error: propTypes.string
};

export default TVPresenter;
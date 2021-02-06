import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const TVPresenter = ({movieResult, tvResult, searchTerm, loading, error}) => null;

TVPresenter.propTypes = {
    movieResult: propTypes.object,
    tvResult: propTypes.object,
    searchTerm: propTypes.string,
    loading: propTypes.isRequired,
    error: propTypes.string
};

export default TVPresenter;
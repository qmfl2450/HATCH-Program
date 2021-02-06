import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const DetailPresenter = ({topRated, popular, airingToday, loading, error}) => null;

DetailPresenter.propTypes = {
    result: propTypes.object,
    loading: propTypes.isRequired,
    error: propTypes.string
};

export default DetailPresenter;
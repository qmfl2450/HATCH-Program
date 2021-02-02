import { MovieAPI } from 'api';
import React from 'react';
import HomePresenter from './HomePresenter';

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            const {data: {results: nowPlaying}} = await MovieAPI.nowPlaying()
            const {data: {results: upcoming}} = await MovieAPI.upcoming()
            const {data: {results: popular}} = await MovieAPI.popular()
            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
        } catch {
            this.setState({
                error: "Can't find movies information."
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const {nowPlaying, upcoming, popular, error, loading} = this.state;
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        )
    }
}
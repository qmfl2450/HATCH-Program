import { TVAPI } from 'api';
import React from 'react';
import TVPresenter from './TVPresenter';

export default class extends React.Component{
    state = {
        toprated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true
    }

    async componentDidMount() {
        try {
            const {data: {results: toprated}} = await TVAPI.toprated();
            const {data: {results: popular}} = await TVAPI.popular();
            const {data: {results: airingToday}} = await TVAPI.airingToday();
            this.setState({
                toprated,
                popular,
                airingToday
            })
        } catch {
            this.setState({
                error: "Can't find TV information."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const {toprated, popular, airingToday, error, loading} = this.state;
        return (
            <TVPresenter 
                toprated={toprated}
                popular={popular}
                airingToday={airingToday}
                error={error}
                loading={loading}
            />
        )
    }
}
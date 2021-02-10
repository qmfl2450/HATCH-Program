import { MovieAPI, TVAPI } from 'api';
import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component{
    state = {
        movieResult: null,
        tvResult: null,
        searchTerm: '',
        error: null,
        loading: false
    }

    handleSubmit = event => {
        event.preventDefault();
        const {searchTerm} = this.state;
        this.setState({loading: true})
        if (searchTerm !== '') {
            this.searchByTerm();
        }
    };

    updateTerm = event => {
        const {
            target: {value}
        } = event;
        this.setState({
            searchTerm: value
        })
    }

    searchByTerm = async () => {
        const {searchTerm} = this.state;
        this.setState({loading: true});
        try {
            const {data: {results: movieResult}} = await MovieAPI.search(searchTerm);
            const {data: {results: tvResult}} = await TVAPI.search(searchTerm);
            this.setState({
                movieResult,
                tvResult
            })
        } catch {
            this.setState({
                error: "Can't find results."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    };
    
    render() {
        const {movieResult, tvResult, searchTerm, error, loading} = this.state;
        return (
            <SearchPresenter 
                movieResult={movieResult}
                tvResult={tvResult}
                searchTerm={searchTerm}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
                error={error}
                loading={loading}
            />
        )
    }
}
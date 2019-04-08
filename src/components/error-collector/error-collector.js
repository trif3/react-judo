import React, { Component } from 'react';
import ErrorCollector from '../error-indicator';

export default class ErrorCollector extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    };

    render() {
        if(this.setState.hasError) {
            return <ErrorIndicator />
        }
        
        return this.props.children;
    }
}
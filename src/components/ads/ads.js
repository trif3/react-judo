import React, { Component } from 'react';

export default class Ads extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins className="adsbygoogle"
                style={{display:'block'}}
                data-ad-client="ca-pub-8195032248780484"
                data-ad-slot="6837914201"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>   
        );
    }
}
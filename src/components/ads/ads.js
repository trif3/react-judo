import React, { Component } from 'react';

export default class Ads extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-8195032248780484",
            enable_page_level_ads: true
       });
    }

    render() {
        return (
            <div>
                ads
            </div>
        );
    }
}
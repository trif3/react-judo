import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            btnClassName: "collapsed",
            ariaExpanded: "false",
            show: "",
        };
    };

    render() {

        const { btnClassName, ariaExpanded, show } = this.state;
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">judosport.gr</a>
                    <button onClick = {this.toggle} 
                            className={`navbar-toggler ${btnClassName}`} 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarResponsive" 
                            aria-controls="navbarResponsive" 
                            aria-expanded={ ariaExpanded } 
                            aria-label="Toggle navigation">
                        <span className={"navbar-toggler-icon"}></span>
                    </button>

                    <div className={`collapse navbar-collapse ${show}`} id="navbarResponsive">
                        <ul onClick={this.toggleClose} className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/athletes/">
                                    Athletes
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/teachers/">
                                    Teachers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/championships/">
                                    Championships
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/secret">
                                    Secret
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

    toggle = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !this.state.isOpen,
            btnClassName: (isOpen) ? "collapsed" : "",
            ariaExpanded: (isOpen) ? "false" : "",
            show: (isOpen) ? "" : "show"
        })
    }

    toggleClose = () => {
        const { isOpen } = this.state;
        if(isOpen) {
            this.toggle();
        } 
    }
}
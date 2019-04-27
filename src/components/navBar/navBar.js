import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// import logo from '../../imgs/logo.svg';

import './navBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a class="navbar-brand" href="/">judosport.gr</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link className="nav-link" to="/teachers/">
                                    Athletes
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/teachers/">
                                    Teachers
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/championships/">
                                    Championships
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li class="nav-item">
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
}



// export default class Info extends Component {
//     render() {
//         return(
//             <div className="card text-white bg-info">
//                 <div className="card-body">
//                 <img src={logo} className="dojo-logo" alt="logo" />
//                     <h4 className="card-title">JudoSport.gr</h4>
//                     <p className="card-text">phone1: <code>694 827 8065</code> <br/> phone2: <code>694 551 7538</code></p>	
//                     <address className="card-text">Greece, <br/>Thessaloniki, Ampelokipoi, <br/>Dimotiko stadio Megas Alexandros</address>
//                 </div>
//             </div> 
//         );
//     }
// };
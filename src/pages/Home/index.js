import React from 'react';
import {Link} from 'react-router-dom'

import './styles.css';

import Dev1 from '../../assets/dev1.png';
import NavBar from '../../components/NavBar';

const Home = () => {
    return(
        <body>
            <NavBar/>
            <div className="content">
                <div className="container">
                    <header>
                        <h1>Navers</h1>
                        <Link to="/register">
                            <button>Adicionar Naver</button>
                        </Link>
                    </header>
                    <main>
                        <ul>
                            <li>
                                <img src={Dev1}  alt=""/>
                                <strong>Juliano Reis</strong>
                                <span>Front-end Developer</span>
                                <div className="actions">

                                </div>
                            </li>
                        </ul>
                    </main>
                </div>
            </div>
        </body>
    );
}

export default Home;
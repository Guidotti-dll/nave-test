import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import Logo from '../../assets/logo.png';

const NavBar = () => {
    return(
        <nav>
            <div className="logo">
                <img src={Logo} alt="NaveJS"/>
            </div>
            <Link to="/" >
                <strong>Sair</strong>
            </Link>
        </nav>
    );

}

export default NavBar;
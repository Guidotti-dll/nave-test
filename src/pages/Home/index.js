import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { IoMdTrash } from "react-icons/io";
import { FaPen } from "react-icons/fa";

import api from '../../services/api';

import './home.css';

import Dev1 from '../../assets/dev1.png';
import NavBar from '../../components/NavBar';

const Home = () => {
    const token = localStorage.getItem('token');

    const [navers,setNavers] = useState([]);

    useEffect(() => {
        const response = api.get('/navers', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then(response => {
            setNavers(response);
        });

        console.log(response);
    }, []);

    return(
        <body>
            <NavBar/>
            <div className="content">
                <div className="containerHome">
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
                                    <Link to="" >
                                        <IoMdTrash size={23} />
                                    </Link>
                                    <Link to="">
                                        <FaPen size={16} />
                                    </Link>
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
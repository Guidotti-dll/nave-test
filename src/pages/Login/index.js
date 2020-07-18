import React, { useState} from  'react';
import './login.css';
import Logo from '../../assets/logo.png';
import { useHistory } from "react-router-dom";
import api from '../../services/api';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    async function HandleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('users/login', { email, password });

            localStorage.setItem('token', response.data.token);

            history.push('/home');

        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }


    return(
        <div className="container">
            <div className="containerLogin">
                <div className="logo">
                    <img src={Logo} alt="NaveJS" />
                </div>

                <div className="inputContainer">
                    <form onSubmit={HandleLogin} >
                        <div className="inputsLogin">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="E-mail" 
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="senha">Senha</label>
                            <input 
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Senha"
                            />
                        </div>
                    </div>

                    <div className="buttonContainer">
                        <button type="submit">Entrar</button>
                    </div>
            
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
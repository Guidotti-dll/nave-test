import React from  'react';
import './styles.css';
import Logo from '../../assets/logo.png';

const Login = () => {
    return(
        <div className="container">
            <div className="containerLogin">
                <div className="logo">
                    <img src={Logo} alt="NaveJS" />
                </div>
                <div className="inputsLogin">
                    <div className="field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="E-mail" />
                    </div>
                    <div className="field">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="password" id="password" placeholder="Senha" />
                    </div>
                </div>
                <div className="buttonContainer">
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
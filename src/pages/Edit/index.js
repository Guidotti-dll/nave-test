import React from 'react';
import NavBar from '../../components/NavBar';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

import './edit.css';

const Edit = () => {
    

    return (
        <div className="edit">
            <NavBar />
            <div className="content">
                <div className="containerEdit">
                    <div className="container-title">
                        <Link to="/home">
                            <IoIosArrowBack color="#212121" size={24} />
                        </Link>
                        <strong>Editar Naver</strong>
                    </div>
                    <div className="container-inputs">
                        <form action="">
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="nome">Nome</label>
                                    <input 
                                    type="text"
                                    placeholder="Nome" 
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="cargo">Cargo</label>
                                    <input 
                                    type="text"
                                    placeholder="Nome"
                                    />
                                </div>
                            </div>

                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="nascimento">Data de nascimento</label>
                                    <input 
                                    type="text"
                                    placeholder="Data de nascimento"
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="tempoEmpresa">Tempo de empresa</label>
                                    <input 
                                    type="text"
                                    placeholder="Tempo de empresa"
                                    />
                                </div>
                            </div>

                            <div className="field-group">
                                <div className="field">
                                        <label htmlFor="projetos">Projetos que participou</label>
                                        <input 
                                        type="text"
                                        placeholder="Projetos que participou" 
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="imagem">URL da imagem</label>
                                        <input 
                                        type="text"
                                        placeholder="URL da imagem"
                                        />
                                </div>
                            </div>

                            <div className="buttonContainer">
                                <button type="submit">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
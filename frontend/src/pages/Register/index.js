import React, {useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg'

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        
        try{
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesos: ${response.data.id}`);
            history.push('/');
        }catch(error){
            alert("Erro no cadastro, tente novamente.");
        }
    }

    return (
       <div className="register-container">
           <div className="content">
               <section>
                <img src={logoImg} alt="Be The Hero"></img>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                <Link className="back-link" to="/" >
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para o logon
                </Link>
               </section>
               <form onSubmit={handleRegister}>

                   <input 
                   placeholder="Nome da ONG"
                   value={name}
                   onChange={e => setName(e.target.value)}></input>
                   <input 
                   placeholder="E-mail" 
                   type="email"
                   value={email}
                   onChange={e => setEmail(e.target.value)}></input>
                   <input 
                   placeholder="Whatsapp"
                   value={whatsapp}
                   onChange={e => setWhatsapp(e.target.value)}></input>

                   <div className="input-group">
                    <input 
                    placeholder="Cidade"
                    value={city}
                    onChange={e => setCity(e.target.value)}></input>
                    <input 
                    placeholder="UF" 
                    style={{width: 80}}
                    value={uf}
                    onChange={e => setUf(e.target.value)}></input>
                   </div>
                   
                   <button className="button" type="submit">Cadastar</button>

               </form>
           </div>
       </div>
    );
}

export default Register;
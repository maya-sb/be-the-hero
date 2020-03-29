import React, {useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg'

function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try{
            const response = await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        }catch(error){
            alert("Erro no cadastro, tente novamente.");
        }
    }

    return (
       <div className="new-incident">
           <div className="content">
               <section>
                <img src={logoImg} alt="Be The Hero"></img>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                
                <Link className="back-link" to="/profile" >
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para home
                </Link>
               </section>
               <form onSubmit={handleNewIncident}>

                   <input 
                   placeholder="Título do caso"
                   value={title}
                   onChange={e => setTitle(e.target.value)}></input>
                   <textarea 
                   placeholder="Descrição"
                   value={description}
                   onChange={e => setDescription(e.target.value)}></textarea>
                   <input 
                   placeholder="Valor em reais"
                   value={value}
                   onChange={e => setValue(e.target.value)}></input>                  
                   <button className="button" type="submit">Cadastar</button>

               </form>
           </div>
       </div>
    );
}

export default NewIncident;
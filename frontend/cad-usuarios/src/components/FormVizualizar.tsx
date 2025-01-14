import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './FormGet';
import cssForm from './FormStyle.module.css';
import { useParams, useNavigate } from 'react-router-dom';



function FormVizualizar() {
  const params = useParams<Record<string, string | undefined>>();
  const userId = params?.userId;
  const [dados, setDados] = useState<any>(null);

  const navegate = useNavigate();

  const handleCancel = () =>{
    navegate('/')
  }

  useEffect(() => {
    console.log('Buscando dados para o userId:', userId);
    axios
      .get(`http://localhost:8000/listarUmUsuario/${userId}`)
      .then((response) => {
        console.log('Dados recebidos:', response.data);
        setDados(response.data[0]); 
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, [userId]);

  useEffect(() => {
    console.log('Dados após setDados:', dados);
  }, [dados]);

  return (
    <div className={cssForm.box}>
      <div className={cssForm.titulo}>
        <h1>Cadastro de Pessoas</h1>
        <p>- Visualizar</p>
      </div>
      <div className={cssForm.container}>
        <div className={cssForm.form}>
          {dados && <Form dados={dados} />} 
        </div>
        <div className={cssForm.botoes}>
          <button className={cssForm.cancelar} onClick={handleCancel} >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormVizualizar;

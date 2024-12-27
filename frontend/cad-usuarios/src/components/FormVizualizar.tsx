import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './FormGet';
import cssForm from './FormStyle.module.css';

interface FormVizuProps {
  onCancelar: () => void;
  userId: string;
}

function FormVizualizar({ onCancelar, userId }: FormVizuProps) {
  const [dados, setDados] = useState<any>(null);

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
          <button className={cssForm.cancelar} onClick={onCancelar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormVizualizar;

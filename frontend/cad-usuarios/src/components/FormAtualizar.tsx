
import Form from './FormGetPut'
import cssForm from './FormStyle.module.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

interface FormAtuProps {
    onCancelar: () => void;
    userId: string ;
}

function FormAtualizar({ onCancelar, userId }: FormAtuProps) {
    const [dados, setDados] = useState<any>(null);
  
    useEffect(() => {
      axios
        .get(`http://localhost:8000/listarUmUsuario/${userId}`)
        .then((response) => setDados(response.data[0]))
        .catch((error) => console.error('Erro ao buscar dados:', error));
    }, [userId]);
  
    const handleUpdate = (formData: any) => {
      axios
        .put(`http://localhost:8000/atualizarUsuario/${userId}`, formData)
        .then(() => {
          alert('Usuário atualizado com sucesso!');
          onCancelar();
        })
        .catch((error) => console.error('Erro ao atualizar usuário:', error));
    };
  
    return (
      <div className={cssForm.box}>
        <div className={cssForm.titulo}>
          <h1>Cadastro de Pessoas</h1>
          <p>- Atualizar</p>
        </div>
        <div className={cssForm.container}>
          <div className={cssForm.form}>
            {dados && <Form dados={dados} onSubmit={handleUpdate} />}
          </div>
          <div className={cssForm.botoes}>
            <button className={cssForm.cancelar} onClick={onCancelar}>
              Cancelar
            </button>
            <button form="meuFormulario" type="submit" className={cssForm.salvar}>
                Salvar  
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default FormAtualizar;
  
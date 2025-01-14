
import Form from './FormGetPut'
import cssForm from './FormStyle.module.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';



function FormAtualizar() {
    const [dados, setDados] = useState<any>(null);
    const params = useParams<Record<string, string | undefined>>();
      const userId = params?.userId;


      const navegate = useNavigate();
      
        const handleCancel = () =>{
          navegate('/')
        }
      
  
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
          handleCancel();
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
            <button className={cssForm.cancelar} onClick={handleCancel}>
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
  
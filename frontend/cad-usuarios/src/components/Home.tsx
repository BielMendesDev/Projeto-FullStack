import '../index.css'
import cssHome from './Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlusCircle, FaPen, FaTrash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';





export interface Usuario {
  id: string; 
  nome: string; 
  contato: string; 
  uf: string; 
  cidade: string; 
  razao_social: string; 
  cpfCnpj: string; 
  endereco: string; 
  telefone: string; 
  email: string; 
  cep: string; 
}




function Home() {
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState<Usuario[]>([]);


  const navegate = useNavigate();

  const handleVizu = (id: String) =>{
    navegate(`/vizualizar/${id}`);
  }

  const handleAtu = (id: String) =>{
    navegate(`/atulizarUsuario/${id}`);
  }

  const handleInclu = () =>{
    navegate('/incluir')
  }

  const handleDel = (id : String, nome:String) =>{
    navegate(`/deletarUsuario/${id}/${nome}`)
  }
  

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:8000/listarUsuarios'); 
      setUsuariosFiltrados(response.data); 
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchUsuarios(); 
  }, []);

  const filtrar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (codigo === '' && nome === '' && razaoSocial === '') {
      fetchUsuarios();
      return;
    }

    const filtros = usuariosFiltrados.filter((usuario) => {
      return (
        (codigo === '' || usuario.id.toString().includes(codigo)) &&
        (nome === '' || usuario.nome.toLowerCase().includes(nome.toLowerCase())) &&
        (razaoSocial === '' || usuario.razao_social === (razaoSocial))
      );
    });
    setUsuariosFiltrados(filtros);
  };


  return  (
    <div className={cssHome.box}>
      <h1>Listagem de Pessoa</h1>
      <div className={cssHome.container}>
        <fieldset>
          <legend>Pesquisa</legend>
          <form onSubmit={filtrar}>
            <div className={cssHome.metade1}>
              <div className={cssHome.codigo}>
                <label htmlFor="">Código</label>
                <input type="number" onChange={(e) => setCodigo(e.target.value)} value={codigo} />
              </div>
              <div className={cssHome.nome}>
                <label htmlFor="">Nome</label>
                <input type="text" onChange={(e) => setNome(e.target.value)} value={nome} />
              </div>
            </div>
            <div className={cssHome.metade2}>
              <div className={cssHome.razao}>
                <label htmlFor="">Razão Social</label>
                <input type="text" onChange={(e) => setRazaoSocial(e.target.value)} value={razaoSocial} />
              </div>
              <button className={cssHome.filtrar} type="submit">
                <FaMagnifyingGlass /> {' '}
                Filtrar
              </button>
            </div>
          </form>
        </fieldset>
        <button className={cssHome.incluir} onClick={handleInclu}>
          <FaPlusCircle /> {' '}
          Incluir
        </button>
        <div className={cssHome.divTabela}>
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Cidade</th>
                <th>UF</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuariosFiltrados.map((usuario) => (
                <tr key={usuario.id.toString()}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.cidade}</td>
                  <td>{usuario.uf}</td>
                  <td>
                    <button className={cssHome.acao} onClick={() => handleVizu(usuario.id)} >
                      <IoEyeSharp />
                    </button>
                    <button  className={cssHome.acao} onClick={() => handleAtu(usuario.id)} >
                      <FaPen />
                    </button>
                    <button  className={cssHome.acao} onClick={() => handleDel(usuario.id, usuario.nome)} >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}



export default Home;

import '../index.css'
import cssHome from './Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlusCircle, FaPen, FaTrash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import FormIncluir from './FormIncluir';
import FormVizualizar from './FormVizualizar';
import FormAtualizar from './FormAtualizar';
import ModalDelete from './ModalDelete'




export interface Usuario {
  id: string; 
  nome: string; 
  contato: string; 
  uf: string; 
  cidade: string; 
  razaoSocial: string; 
  cpfCnpj: string; 
  endereco: string; 
  telefone: string; 
  email: string; 
  cep: string; 
}




function Home() {
  const [codigo, setCodigo] = useState('')
  const [nome, setNome] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState<Usuario[]>([])
  const [exibirFormIncluir, setExibirFormIncluir] = useState(false);
  const [exibirFormVizualizar, setExibirFormVizualizar] = useState(false);
  const [exibirFormAtualizar, setExibirFormAtualizar] = useState(false);
  const [exibirModalDelete, setExibirModalDelete] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<string>('');
  const [nomeSelecionado, setNomeSelecionado] = useState<String>('')

  const handleIncluirClick = () => {
    setExibirFormIncluir(true); 
  };

  const handleModalClick = (id: string, nome: string) => {
    setUsuarioSelecionado(id);
    setNomeSelecionado(nome);
    setExibirModalDelete(true); 
  };

  const handleVizuClick = (id: string) => {
    console.log("ID Selecionado:", id); 
    setUsuarioSelecionado(id);
    setExibirFormVizualizar(true);

  };

  const handleAtuClick = (id: string) =>{
    console.log("ID Selecionado:", id); 
    setUsuarioSelecionado(id);
    setExibirFormAtualizar(true);
    fetchUsuarios()
  }


  const handleCancelar = () => {
    setExibirFormIncluir(false);
    setExibirFormVizualizar(false);
    setExibirFormAtualizar(false);
    setExibirModalDelete(false);
    fetchUsuarios();
  };
  

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
        (codigo === '' || usuario.id.toString() === (codigo)) &&
        (nome === '' || usuario.nome.toLowerCase().includes(nome.toLowerCase())) &&
        (razaoSocial === '' || usuario.razaoSocial.toLowerCase().includes(razaoSocial.toLowerCase()))
      );
    });
    setUsuariosFiltrados(filtros);
  };


  return (
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
        <button className={cssHome.incluir} onClick={handleIncluirClick}>
          <FaPlusCircle /> {' '}
          Incluir
        </button>
        {exibirFormIncluir && <FormIncluir onCancelar={handleCancelar} onUpdate={fetchUsuarios} />}
        {exibirFormVizualizar && usuarioSelecionado && < FormVizualizar userId={usuarioSelecionado} onCancelar={handleCancelar}/>}
        {exibirFormAtualizar && <FormAtualizar userId={usuarioSelecionado} onCancelar={handleCancelar}/>}
        {exibirModalDelete && < ModalDelete userName={nomeSelecionado} userId={usuarioSelecionado} fetchUsuarios={fetchUsuarios} onCancelar={handleCancelar}/> }
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
                    <button className={cssHome.acao} onClick={() => handleVizuClick(usuario.id)}>
                      <IoEyeSharp />
                    </button>
                    <button  className={cssHome.acao} onClick={() => handleAtuClick(usuario.id)}>
                      <FaPen />
                    </button>
                    <button  className={cssHome.acao} onClick={() => handleModalClick(usuario.id, usuario.nome)}>
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

import cssForm from './FormStyle.module.css'
import axios from 'axios'
import React, { useState, useImperativeHandle, forwardRef } from 'react';


 



interface FormData {
  cpf_cnpj: string;
  nome: string;
  email: string;
  contato: string;
  telefone_contato: string;
  razao_social: string;
  cep: string;
  uf: string;
  endereco: string;
  cidade: string;
  bairro: string;
}


const Form = forwardRef((_, ref) => {

    const [errors, setErrors] = useState<Partial<FormData>>({});
    
    

    const [formData, setFormData] = useState<FormData>({
        cpf_cnpj: '',
        nome: '',
        email: '',
        contato: '',
        telefone_contato: '',
        razao_social: '',
        cep: '',
        uf: '',
        endereco: '',
        cidade: '',
        bairro: ''
    });

    const validarFields = () => {
        const newErrors: Partial<FormData> = {};
        if (!formData.cpf_cnpj || formData.cpf_cnpj.trim() === "" || formData.cpf_cnpj === null) {
            newErrors.cpf_cnpj = 'CPF/CNPJ é obrigatório';
        }
        if (!formData.nome || formData.nome.trim() === "" || formData.nome === null) {
            newErrors.nome = 'nome é obrigatório';

        }
        if(!formData.cidade || formData.cidade.trim() === "" || formData.cidade === null) {
            newErrors.cidade = 'cidade é obrigatório';
        }
        if(!formData.uf || formData.uf.trim() === "" || formData === null) {
            newErrors.uf = 'uf é obrigatório';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target as HTMLInputElement;
        setFormData({...formData,[name]: value });
    };

    
    
    

    const submit = async () => {
        if (!validarFields()) {
          console.log('Erros nos campos:', errors);
          return null; 
        }
        try {
          await axios.post('http://localhost:8000/novoUsuario', formData);
          console.log('Usuário inserido com sucesso');
          
          return formData; 
        } catch (error) {
          console.error('Erro ao adicionar usuário:', error);
          return null; 
        }
        
      };
    
      useImperativeHandle(ref, () => ({
        submit,
      }));
    
    return(
        <form onSubmit={submit}>
            <div className={cssForm.metadeCima}>
                <div className={cssForm.metade1Cima}>
                    <div className={cssForm.labelInput}>
                        <label>CPF ou CNPJ *</label>
                        <input
                        name="cpf_cnpj"
                        type="text"
                        value={formData.cpf_cnpj}
                        onChange={handleChange}
                        placeholder='Ex: 000.000.000-00 ou 00.000/0000-00'
                        />
                         {errors.cpf_cnpj && <span className={cssForm.error}>{errors.cpf_cnpj}</span>}
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Nome Fantasia*</label>
                        <input
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder='Ex: Seu nome ou Nome Fantasia'
                        />
                        {errors.nome && <span className={cssForm.error}>{errors.nome}</span>}
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Razão Social</label>
                        <input
                        name="razao_social"
                        type="text"
                        value={formData.razao_social}
                        onChange={handleChange}
                        placeholder='Ex: Nome da Empresa'
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Endereço</label>
                        <input
                        name="endereco"
                        type="text"
                        value={formData.endereco}
                        onChange={handleChange}
                        placeholder='Ex: Rua dos Pinheiros, 1500, apartamento 302'
                        />
                    </div>
                </div>
                <div className={cssForm.metade2Cima}>
                    <div className={cssForm.labelInput}>
                        <label>Contato</label>
                        <input
                        name="contato"
                        type="text"
                        value={formData.contato}
                        onChange={handleChange}
                        placeholder='Ex: (DDD) 9XXXX-XXXX'
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Telefone de Contato</label>
                        <input
                        name="telefone_contato"
                        type="text"
                        value={formData.telefone_contato}
                        onChange={handleChange}
                        placeholder='Ex: (DDD) XXXX-XXXX'
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Email de Contato</label>
                        <input
                        name="email"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Ex: seu_email@email.com'
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Bairro</label>
                        <input
                        name="bairro"
                        type="text"
                        value={formData.bairro}
                        onChange={handleChange}
                        placeholder='Ex: Jardim Paulista'
                        />
                    </div>
                </div>
            </div>
            <div className={cssForm.metadeBaixo}>
                <div className={`${cssForm.labelInput} ${cssForm.cidade}`}>
                    <label>Cidade *</label>
                    <input
                        name="cidade"
                        type="text"
                        value={formData.cidade}
                        onChange={handleChange}
                        placeholder='Ex: São Paulo'
                    />
                    {errors.cidade && <span className={cssForm.error}>{errors.cidade}</span>}
                </div>
                <div className={`${cssForm.labelInput} ${cssForm.cep}`}>
                    <label>CEP</label>
                    <input
                        name="cep"
                        type="text"
                        value={formData.cep}
                        onChange={handleChange}
                        placeholder='Ex: 00000-000'
                    />
                </div>
                <div className={`${cssForm.labelInput} ${cssForm.uf}`}>
                    <label>UF{''}*</label>
                    <input
                        name="uf"
                        type="text"
                        value={formData.uf}
                        onChange={handleChange}
                        placeholder='Ex: SP'
                    />
                    {errors.uf && <span className={cssForm.error}>{errors.uf}</span>}
                </div>
            </div>
            
        </form>
    );
})

export default Form;

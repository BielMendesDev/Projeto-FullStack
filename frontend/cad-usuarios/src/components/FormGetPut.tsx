import cssForm from './FormStyle.module.css';
import React, {  forwardRef, useState } from 'react';



interface FormProps {
    dados: {
      cpf_cnpj: string;
      nome: string;
      razao_social: string;
      endereco: string;
      contato: string;
      telefone_contato: string;
      email: string;
      bairro: string;
      cidade: string;
      cep: string;
      uf: string;
    };
    onSubmit: (formData: any) => void;
  }


  function Form({ dados, onSubmit }: FormProps) {
    const [formData, setFormData] = useState(dados);
    const [errors, setErrors] = useState({ cpf_cnpj: '', nome: '', cidade: '', uf: '' });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const validate = () => {
      const newErrors: any = {};
      if (!formData.cpf_cnpj) newErrors.cpf_cnpj = 'CPF ou CNPJ é obrigatório.';
      if (!formData.nome) newErrors.nome = 'Nome é obrigatório.';
      if (!formData.cidade) newErrors.cidade = 'Cidade é obrigatória.';
      if (!formData.uf) newErrors.uf = 'UF é obrigatório.';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        onSubmit(formData);
      }
    };
        

    return(
        <form id="meuFormulario" onSubmit={handleSubmit}>
            <div className={cssForm.metadeCima}>
                <div className={cssForm.metade1Cima}>
                    <div className={cssForm.labelInput}>
                        <label>CPF ou CNPJ *</label>
                        <input
                        name="cpf_cnpj"
                        type="text"
                        value={formData.cpf_cnpj}
                        onChange={handleInputChange}
                        />
                        {errors.cpf_cnpj && <span className={cssForm.error}>{errors.cpf_cnpj}</span>}
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Nome Fantasia *</label>
                        <input
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleInputChange}
                        />
                        {errors.nome && <span className={cssForm.error}>{errors.nome}</span>} 
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Razão Social</label>
                        <input
                        name="razao_social"
                        type="text"
                        value = {dados.razao_social}
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Endereço</label>
                        <input
                        name="endereco"
                        type="text"
                        value = {dados.endereco}
                        />
                    </div>
                </div>
                <div className={cssForm.metade2Cima}>
                    <div className={cssForm.labelInput}>
                        <label>Contato</label>
                        <input
                        name="contato"
                        type="text"
                        value = {dados.contato}

                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Telefone de Contato</label>
                        <input
                        name="telefone_contato"
                        type="text"
                        value = {dados.telefone_contato}
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Email de Contato</label>
                        <input
                        name="email"
                        type="text"
                        value = {dados.email}
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Bairro</label>
                        <input
                        name="bairro"
                        type="text"
                        value = {dados.bairro}
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
                    onChange={handleInputChange}
                    />
                    {errors.cidade && <span className={cssForm.error}>{errors.cidade}</span>}
                </div>
                <div className={`${cssForm.labelInput} ${cssForm.cep}`}>
                    <label>CEP</label>
                    <input
                        name="cep"
                        type="text"
                        value = {dados.cep}
                    />
                </div>
                <div className={`${cssForm.labelInput} ${cssForm.uf}`}>
                    <label>UF{''}*</label>
                    <input
                    name="uf"
                    type="text"
                    value={formData.uf}
                    onChange={handleInputChange}
                    />
                    {errors.uf && <span className={cssForm.error}>{errors.uf}</span>}
                </div>
            </div>
        </form>
    );
}

export default Form;

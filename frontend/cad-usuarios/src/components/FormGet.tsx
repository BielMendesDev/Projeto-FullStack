import cssForm from './FormStyle.module.css'

import React, {  forwardRef } from 'react';


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
 }


const Form = forwardRef<{}, FormProps>(({dados}, ref) => {

    return(
        <form>
            <div className={cssForm.metadeCima}>
                <div className={cssForm.metade1Cima}>
                    <div className={cssForm.labelInput}>
                        <label>CPF ou CNPJ *</label>
                        <input
                        name="cpf_cnpj"
                        type="text"
                        value = {dados.cpf_cnpj}
                        readOnly
                        />
                         
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Nome Fantasia *</label>
                        <input
                        name="nome"
                        type="text"
                        value = {dados.nome}
                        readOnly
                        />
                        
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Razão Social</label>
                        <input
                        name="razao_social"
                        type="text"
                        value = {dados.razao_social}
                        readOnly
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Endereço</label>
                        <input
                        name="endereco"
                        type="text"
                        value = {dados.endereco}
                        readOnly
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
                        readOnly
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Telefone de Contato</label>
                        <input
                        name="telefone_contato"
                        type="text"
                        value = {dados.telefone_contato}
                        readOnly
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Email de Contato</label>
                        <input
                        name="email"
                        type="text"
                        value = {dados.email}
                        readOnly
                        />
                    </div>
                    <div className={cssForm.labelInput}>
                        <label>Bairro</label>
                        <input
                        name="bairro"
                        type="text"
                        value = {dados.bairro}
                        readOnly
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
                        value = {dados.cidade}
                        readOnly
                    />
                    
                </div>
                <div className={`${cssForm.labelInput} ${cssForm.cep}`}>
                    <label>CEP</label>
                    <input
                        name="cep"
                        type="text"
                        value = {dados.cep}
                        readOnly
                    />
                </div>
                <div className={`${cssForm.labelInput} ${cssForm.uf}`}>
                    <label>UF{''}*</label>
                    <input
                        name="uf"
                        type="text"
                        value = {dados.uf}
                        readOnly
                    />
                </div>
            </div>
            
        </form>
    );
})

export default Form;

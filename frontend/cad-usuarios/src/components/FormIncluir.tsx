import cssForm from './FormStyle.module.css';
import Form from './FormPost';
import { useRef } from 'react';


interface FormIncluirProps {
    onCancelar: () => void;
    onUpdate: () => void;
}

function FormIncluir({ onCancelar, onUpdate }: FormIncluirProps) {

    const formRef = useRef<any>(null);
    
    const handleSubmit = async () => {
        if (formRef.current) {
            const formData = await formRef.current.submit(); 
            if (formData) {
                try {
                    console.log('Enviando dados para a API:', formData);
                    onUpdate(); 
                    onCancelar(); 
                } catch (error) {
                    console.error('Erro ao salvar:', error);
                }
            }
        }
    };


    return(
        <div className={cssForm.box}>
             <div className={cssForm.titulo}>
                <h1>Cadastro de Pessoas</h1>
                <p>- Incluir</p>
             </div>
             <div className={cssForm.container}>
                <div className={cssForm.form}>
                    <Form  ref={formRef} />
                </div>
                <div className={cssForm.botoes}>
                    <button className={cssForm.cancelar} onClick={onCancelar}>Cancelar</button>
                    <button className={cssForm.salvar} onClick={handleSubmit}>Salvar</button>
                </div>
             </div>
        </div>
    )
}

export default FormIncluir;

import { FaCircleExclamation } from "react-icons/fa6";
import '../index.css'
import cssModal from './ModalDelete.module.css'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


function ModalDelete(){

    const params = useParams<Record<string, string | undefined>>();
    const userId = params?.userId;
    const userName = params?.userName
    const navegate = useNavigate();
    const handleCancel = () =>{
        navegate('/')
    }

    const deletarUsuario = async () => {
        try {
            console.log(userId)
          await axios.delete(`http://localhost:8000/deletarUsuario/${userId}`);
          handleCancel();
        } catch (error) {
          console.error("Erro ao excluir o usuário:", error);
        }
      };




    return(
        <div className={cssModal.boxOutside}>
            <div className={cssModal.containerModal}>
                <h1 className={cssModal.h1Modal}>Excluir Registro</h1>
                <div className={cssModal.boxModal}>
                    <div className={cssModal.icon}>
                        <FaCircleExclamation/>
                    </div>
                    <div>
                        <h2 className={cssModal.h2Modal}>Tem certeza que deseja realizar essa operação?</h2>
                        <p className={cssModal.pModal}>Você deseja excluir o cadastro da Pessoa: {userName}?  </p>
                    </div>
                    <div className={cssModal.botoesModal}>
                        <button className={cssModal.sim} onClick={deletarUsuario}>Sim</button>
                        <button className={cssModal.nao} onClick={handleCancel}>Não</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete
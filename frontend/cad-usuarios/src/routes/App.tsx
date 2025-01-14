import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "../components/Home";
import FormVizualizar from "../components/FormVizualizar";
import FormAtualizar from "../components/FormAtualizar";
import FormIncluir from "../components/FormIncluir";
import ModalDelete from "../components/ModalDelete";

function App (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/incluir' element={<FormIncluir/>}/>
                <Route path='/vizualizar/:userId' element={<FormVizualizar/>}/>
                <Route path='/atulizarUsuario/:userId' element={<FormAtualizar/>}/>
                <Route path='/deletarUsuario/:userId/:userName' element={<ModalDelete/>} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
const db = require("../config/db_connection");

class UsuarioController {
    async novoUsuario(request, response){
        const {cpf_cnpj, nome, email, contato, telefone_contato, razao_social, cep, uf, endereco, cidade, bairro} = request.body;

        console.log(cpf_cnpj, nome, email, contato, telefone_contato, razao_social, cep, uf, endereco, cidade, bairro);

        db.insert({cpf_cnpj, nome, email, contato, telefone_contato, razao_social, cep, uf, endereco, cidade, bairro})
        .table("usuarios")
        .then(data=>{response.json({message:"usuario no sistema"})}).catch(error=>{
            console.log(error);
        })
    }



    async listarUsuarios(request, response){
        db.select("*").
        table("usuarios")
        .then(usuarios=>{
            console.log(usuarios);
            response.json(usuarios);
        }).catch(error=>{
            console.log(error);
        })
    }


    async getUserCpfCnpj(request, response){
        db.select('cpf_cnpj')
        .table('usuarios')
        .then(usuarios=>{
            console.log(usuarios);
            response.json(usuarios);
        }).catch(error=>{
            console.log(error);
        })
    }


     async listarUmUsuario(request, response){
        const {id} = request.params;

        db.select("*")
        .table("usuarios")
        .where({id:id})
        .then(usuario=>{
            response.json(usuario)
        }).catch(error=>{
            console.log(error)
        });
    }

    async atualizarUsuario(request, response) {
        const { id } = request.params; 
        const dadoAtualizado = request.body; 
    
        db.where({ id: id }) 
            .update(dadoAtualizado) 
            .table("usuarios")
            .then(usuarios => {
                response.json({ message: "usuario atualizado" }); 
            })
            .catch(error => {
                console.log(error); 
            });
    }
    

     async deletarUsuario(request, response){
        const {id} = request.params;

        db.where({id:id}).del().table("usuarios").then(usuario=>{
            response.json({message:"usuario deletado"})
        }).catch(error=>{
            console.log(error)
        });
    }

    

}

module.exports = new UsuarioController()
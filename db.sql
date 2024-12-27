CREATE DATABASE usuarios;

USE usuarios;

CREATE TABLE usuarios(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
cpf_cnpj VARCHAR(100) NOT NULL, 
nome VARCHAR(100) NOT NULL,
email VARCHAR(100),
contato VARCHAR(100),
telefone_contato VARCHAR(100),
razao_social VARCHAR(100),
cep VARCHAR(100),
uf VARCHAR(100) NOT NULL, 
endereco VARCHAR(100), 
cidade VARCHAR(100) NOT NULL,   
bairro VARCHAR(100) 
);

INSERT INTO usuarios (cpf_cnpj,
    nome, 
    email, 
    contato, 
    telefone_contato, 
    razao_social, 
    cep, 
    uf, 
    endereco, 
    cidade, 
    bairro
) VALUES
('12345678901', 'João Silva', 'joao.silva@example.com', 'Maria Silva', 
'11999998888', 'João Silva Comércio LTDA', '01001-000', 'SP', 'Rua da Esperança, 123', 'São Paulo', 'Centro'),
('98765432100', 'Ana Oliveira', 'ana.oliveira@example.com', 'Pedro Oliveira', 
'21988887777', 'Ana Oliveira Consultoria', '22010-000', 'RJ', 'Av. Atlântica, 456', 'Rio de Janeiro', 'Copacabana'),
('45678912302', 'Carlos Pereira', 'carlos.pereira@example.com', 
NULL, NULL, 'Pereira Construções', '71010-900', 'DF', 'Quadra 5, Bloco B', 'Brasília', 'Asa Norte'),
('78912345603', 'Mariana Souza', 'mariana.souza@example.com', 
'Paulo Souza', '31977776666', 'Mariana Boutique', '30120-030', 'MG', 'Rua Goiás, 789', 'Belo Horizonte', 'Centro'),
('32165498704', 'Lucas Almeida', 'lucas.almeida@example.com', 
'Roberta Almeida', '42966665555', 'Lucas Auto Peças', '40020-040', 'BA', 'Av. Sete de Setembro, 1010', 'Salvador', 'Pelourinho'),
('65498732105', 'Fernanda Lima', 'fernanda.lima@example.com', 
NULL, NULL, NULL, '88030-050', 'SC', 'Rua das Flores, 112', 'Florianópolis', 'Trindade'),
('98732165406', 'Pedro Santos', 'pedro.santos@example.com', 
'Clara Santos', '51955554444', 'Santos Distribuidora', '90040-060', 'RS', 'Rua Padre Cacique, 2020', 'Porto Alegre', 'Cristal'),
('12378945607', 'Juliana Martins', 'juliana.martins@example.com', 
'Rafael Martins', '62944443333', 'Martins Transportes', '74030-070', 'GO', 'Av. Goiás, 303', 'Goiânia', 'Setor Central'),
('45612378908', 'Renato Costa', 'renato.costa@example.com', 
NULL, NULL, NULL, '59040-080', 'RN', 'Av. Hermes da Fonseca, 505', 'Natal', 'Tirol'),
('78945612309', 'Patrícia Moreira', 'patricia.moreira@example.com', 
'Fernando Moreira', '71933332222', 'Moreira Eventos', '70070-090', 'DF', 'Eixo Monumental, Setor 2', 'Brasília', 'Centro');


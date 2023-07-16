<div align="center" >
  
  # BookList - Listador de livros
  ### Este projeto foi desenvolvido em <img align="center" src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" /> junto do banco de dados <img align="center" src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white" /> para listar livros cujo você tem ou já tenha lido de forma simples.
 ### No momento não é capaz de armazenar imagens, mas futuramente será capaz, sendo assim espero que gostem e leia toda a documentação para saber o que deve configura antes de utilizar.
</div>
<div align="center" >

<h3>
  
 | Comando              | Descrição                |
 | -------------------- | ------------------------ |
 | `npm start`| Inicialização do Servidor     |
 
</h3> 
<h2 align="center">Rotas</h2>
<h3>
  
  
 | Metodo               | Caminho               |  Descrição               |
 | -------------------- | --------------------  | ------------------------ |
 | GET              |        `/livro`       | Puxa todos os livros criado.|
 | GET              |       `/livro/:id`    | Puxa um livro expecifico com base no id.|
 | POST             |       `/livro`        | Lista os livros. |
 | PATCH            |       `/livro/:id`    | Alterar / Atualizar um ou mais dados especifico do livro.|
 | DELETE           |       `/livro/:id`    | Exclui todo livro com base no seu id.|
 
</h3> 

<h2 align="center">Configuração</h2>

Nesta etapa primeiro iremos criar a Database  no banco <img align="center" src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white"/> cujo será utilizado pela Api:

<h3>
  
```

CREATE DATABASE BookList;

 USE BookList;

 CREATE TABLE livros (

    id INT AUTO_INCREMENT PRIMARY KEY,

    titulo VARCHAR(100) NOT NULL,

    autor VARCHAR(100),

    ano_publicacao INT,);

```
</h3>

</div>

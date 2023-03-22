# Login-Cadastro
Tela de login e cadastro, front-end e back-end com conexão ao PostgreSQL utilizando NodeJS


Bibliotecas necessarias: <br>
 $ npm install express <br>
 $ npm install body-parser <br>
 $ npm install pg <br>

--------------------------------------------------------------------------------------------------

Configure o arquivo create-tables.js com os dados do seu banco de dados:

  user: "Seu usuario do PostgreSQL", <br/>
  host: "localhost", <br/>
  database: "Nome da sua base de dados", <br/>
  password: "Senha do seu PostgreSQL", <br/>
  port: 5432, <br/>


Tendo sua base de dados criada no PostgreSQL, rode no terminal o comando: <br/>

 $ node create-tables.js

Com isso será criado as tabelas na sua base de dados.

--------------------------------------------------------------------------------------------------

No arquivo app.js faça as mesmas configurações:

  user: "Seu usuario do PostgreSQL", <br/>
  host: "localhost", <br/>
  database: "Nome da sua base de dados", <br/>
  password: "Senha do seu PostgreSQL", <br/>
  port: 5432, <br/>
  
  
  Para executar o programa rode no terminal o comando: <br/>
  
  
 $ node app.js
 
 
 --------------------------------------------------------------------------------------------------

Por motivos que ainda não conheço o CSS não funciona executando o programa pelo NodeJS, se souber e quiser ajudar, fico agradecido!!!

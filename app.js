const express = require("express")
const bodyParser = require("body-parser")
const { Pool } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bd-users",
  password: "#abc123#",
  port: 5432, // porta padrão do postgresql
})

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

// Rota para página de cadastro
app.get("/cadastro", (req, res) => {
  res.sendFile(__dirname + "/public/cadastro.html")
})

// Rota para página de login
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html")
})

app.post("/signup", (req, res) => {
  const { firstName, lastName, username, email, password } = req.body

  pool
    .query(
      `
    INSERT INTO users (first_name, last_name, username, email, password)
    VALUES ($1, $2, $3, $4, $5)
  `,
      [firstName, lastName, username, email, password]
    )
    .then(() => {
      res.send("Usuário cadastrado com sucesso!")
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send("Erro ao cadastrar usuário.")
    })
})

app.post("/login", (req, res) => {
  const { username, password } = req.body

  pool
    .query(
      `
    SELECT * FROM users
    WHERE username = $1 AND password = $2
  `,
      [username, password]
    )
    .then((result) => {
      if (result.rows.length > 0) {
        res.send("Login realizado com sucesso!")
      } else {
        res.status(401).send("Usuário ou senha inválidos.")
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send("Erro ao realizar login.")
    })
})

app.listen(3000, () => {
  console.log(
    `Servidor iniciado na porta 3000! 
    Acesse http://localhost:3000/login para cadastrar um novo usuário.`
  )
})

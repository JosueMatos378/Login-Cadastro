const { Pool } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bd-users",
  password: "#abc123#",
  port: 5432, // porta padrão do postgresql
})

pool
  .query(
    `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255)
  );
`
  )
  .then(() => {
    console.log("Tabelas criadas com sucesso!")
  })
  .catch((err) => {
    console.error(err)
  })
  .finally(() => {
    pool.end()
  })

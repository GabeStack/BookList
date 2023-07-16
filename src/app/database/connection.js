import mysql from "mysql2";
import dotenv  from "dotenv";
dotenv.config();
const Connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
Connection.connect();
/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql  instrução sql a ser executada
 * @param {string=id / [book, id]} valor  a serem passados parao sql
 * @param {string} mensagemReject  mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consult = (SQL, valor = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    Connection.query(SQL, valor, (error, result) => {
      if (error) return reject(mensagemReject);
      // fazer o Parse dos resultados
      const rows = JSON.parse(JSON.stringify(result));
      console.log(rows);
      return resolve(rows);
    });
  });
};

export default Connection;

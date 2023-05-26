import { consult } from "../database/connection.js";

class BookRepository {
  //Crud
  create(livro) {
    const SQL = "INSERT INTO BookList.Livros SET ?;";
    return consult(SQL, livro, "Não foi possivel cadastrar;");
  }
  findAll() {
    const SQL = "SELECT  * FROM BookList.Livros;";
    return consult(SQL, "Não foi possivel encontrar;");
  }
  findById(id) {
    const SQL = "SELECT  * FROM BookList.Livros  WHERE id=?;";
    return consult(SQL, id, "Não foi possivel encontrar;");
  }
  update(livro, id) {
    const SQL = "UPDATE BookList.Livros SET ? WHERE id = ?;";
    return consult(SQL, [livro, id], "Não foi possivel atualizar;");
  }
  delete(id) {
    const SQL = "DELETE FROM BookList.Livros WHERE id=?;";
    return consult(SQL, id, "Não foi possivel deletar;");
  }
}
export default new BookRepository();

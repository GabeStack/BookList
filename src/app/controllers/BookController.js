import BookRepository from "../repositories/BookRepository.js";

class BookController {

  async index(req, res) {
    const result = await BookRepository.findAll();
    res.status(200).json(result);
  }
  async show(req, res) {
    const id = req.params.id;
    const result = await BookRepository.findById(id);
    if (!result) {
      res.status(404).json({ Error: "Não Localizado" });
    }
    res.status(200).json(result);
  }
  async store(req, res) {
    const livro = req.body;
    const result = await BookRepository.create(livro);
    res.status(201).json(result);
  }
  async update(req, res) {
    const id = req.params.id;
    const idExiste = await BookRepository.findById(id);
    if (!idExiste) {
      return res.status(404).json({ Erro: "Id não existe" });
    }
    const livro = req.body;
    const row = await BookRepository.update(livro, id);
    res.status(200).json(row);
  }
  async delete(req, res) {
    const id = req.params.id;
    const idExiste = await BookRepository.findById(id);
    if (!idExiste) {
      return res.status(404).json({ Erro: "Id não existe" });
    }
    const row = await BookRepository.delete(id);
    res.status(200).json(row);
  }
}
export default new BookController();

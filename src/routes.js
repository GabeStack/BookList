import { Router } from "express";
import BookController from "./app/controllers/BookController.js";

const router = Router();
// ROTAS
router.post("/livro", BookController.store);
router.get("/livro", BookController.index);
router.get("/livro/:id", BookController.show);
router.put("/livro/:id", BookController.update);
router.delete("/livro/:id", BookController.delete);

export default router;

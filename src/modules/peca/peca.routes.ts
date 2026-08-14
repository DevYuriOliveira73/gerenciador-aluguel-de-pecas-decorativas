import * as PecaController from "./peca.controller.js";
import { Router } from "express";
import {createPecaSchema} from "./peca.dto.js"
import {validate} from "../../shared/middlewares/validate"

const r = Router();

r.post("/", validate(createPecaSchema), PecaController.createPecaController);
r.get("/", PecaController.getAllPecaController);

//r.patch('/:id', PecaController.atualizarPecaController)         // atualiza campos genéricos (nome, preço...)
r.patch('/:id/desativar', PecaController.desativarPecaController) // ação específica: desativar

export default r;

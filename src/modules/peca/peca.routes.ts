import * as PecaController from "./peca.controller.js";
import { Router } from "express";

const r = Router();

r.post("/", PecaController.createPecaController);
r.get("/", PecaController.getAllPecaController);

export default r;

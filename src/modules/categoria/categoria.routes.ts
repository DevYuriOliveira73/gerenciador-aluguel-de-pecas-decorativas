import * as CategoriaController from "./categoria.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", CategoriaController.createCategoriaController);
router.get("/", CategoriaController.getCategoriaController);
router.put("/:id", CategoriaController.updateCategoriaController)

export default router;

import * as CategoriaController from "./categoria.controller.js";
import { Router } from "express";
import {validate} from "../../shared/middlewares/validate"
import {createCategoriaSchema, updateCategoriaSchema} from "./categoria.dto.js"

const r = Router();

r.post("/", validate(createCategoriaSchema), CategoriaController.createCategoriaController);
r.get("/", CategoriaController.getCategoriaController);
r.patch(
    "/:id",
    validate(updateCategoriaSchema),
    CategoriaController.updateCategoriaController
  );


export default r;

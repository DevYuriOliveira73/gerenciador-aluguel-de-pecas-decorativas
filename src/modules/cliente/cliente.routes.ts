import * as ClienteController from "./cliente.controller.js";
import { Router } from "express";
import {validate} from "../../shared/middlewares/validate"
import {createClienteSchema} from "./cliente.dto.js"

const router = Router();

router.post("/", validate(createClienteSchema), ClienteController.createClienteController);
router.get("/", ClienteController.getAllClienteController);

export default router;

import * as ClienteController from "./cliente.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", ClienteController.createClienteController);
router.get("/", ClienteController.getAllClienteController);

export default router;
